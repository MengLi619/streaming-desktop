import { Container, Service } from 'typedi';
import { Source, Transition, TransitionType } from '../../types/obs';
import * as uuid from 'uuid';
import { ObsService } from './obsService';
import { ObsHeadlessService } from './obsHeadlessService';
import { ipcMain, webContents } from 'electron';

@Service()
export class SourceService {
  private readonly obsService: ObsService = Container.get(ObsService);
  private readonly obsHeadlessService: ObsHeadlessService = Container.get(ObsHeadlessService);

  private sources: Record<number, Source> = {};
  private previewSource?: Source;
  private programTransition?: Transition;
  private liveSource?: Source;

  public async initialize() {
    // Initialize local obs
    this.obsService.initialize();

    // Initialize remote obs
    const sources = await this.obsHeadlessService.initialize();
    let index = 0;
    for (const source of sources) {
      this.obsService.createSource(source.id, source.url);
      this.sources[index++] = source;
    }

    ipcMain.on('updateSource', (event, index: number, name: string, url: string) => this.updateSource(index, name, url));
    ipcMain.on('removeSource', (event, index: number) => this.removeSource(index));
    ipcMain.on('preview', (event, source: Source) => this.preview(source));
    ipcMain.on('take', (event, source: Source, transitionType: TransitionType, transitionDurationMs: number) => this.take(source, transitionType, transitionDurationMs));
    ipcMain.on('updateLiveUrl', (event, url: string) => this.updateLiveUrl(url));

    ipcMain.on('getSources', event => event.returnValue = this.sources);
    ipcMain.on('getPreviewSource', event => event.returnValue = this.previewSource);
    ipcMain.on('getProgramTransition', event => event.returnValue = this.programTransition);
    ipcMain.on('getLiveSource', event => event.returnValue = this.liveSource);
  }

  public async updateSource(index: number, name: string, url: string) {
    const source = this.sources[index];
    if (source) {
      await this.obsHeadlessService.removeSource(source);
      await this.obsService.removeSource(source.id);
    }
    const newSourceId = await this.obsHeadlessService.addSource(name, url);
    this.obsService.createSource(newSourceId, url);
    this.sources[index] = { id: newSourceId, name, url };
    this.broadcastMessage('sourcesChanged', this.sources);
  }

  public async removeSource(index: number) {
    const source = this.sources[index];
    if (source) {
      await this.obsHeadlessService.removeSource(source);
      await this.obsService.removeSource(source.id);
    }
    delete this.sources[index];
    this.broadcastMessage('sourcesChanged', this.sources);
  }

  public preview(source: Source) {
    this.previewSource = source;
    this.broadcastMessage('previewChanged', source);
  }

  public async take(source: Source, transitionType: TransitionType, transitionDurationMs: number) {
    const transition = await this.obsService.switchSource(this.programTransition?.source, source, transitionType, transitionDurationMs);
    await this.obsHeadlessService.switchSource(source, transitionType, transitionDurationMs);
    this.programTransition = transition;
    this.broadcastMessage('programChanged', this.programTransition);
  }

  public async updateLiveUrl(url: string) {
    if (url === this.liveSource?.url) {
      return;
    }
    if (this.liveSource) {
      await this.obsService.removeSource(this.liveSource.id);
      this.liveSource = undefined;
    }
    const sourceId = `output_${uuid.v4()}`;
    const sourceName = 'Output';
    this.liveSource = { id: sourceId, name: sourceName, url: url };
    await this.obsService.createSource(sourceId, url);
    this.broadcastMessage('liveChanged', this.liveSource);
  }

  private broadcastMessage(channel: string, ...args: any[]) {
    webContents.getAllWebContents().forEach(webContents => {
      webContents.send(channel, ...args);
    });
  }
}
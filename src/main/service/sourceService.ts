import { Container, Service } from 'typedi';
import { Source, Transition, TransitionType } from '../../types/obs';
import * as uuid from 'uuid';
import { ObsService } from './obsService';
import { ObsHeadlessService } from './obsHeadlessService';
import { ipcMain, webContents } from 'electron';
import { StorageService } from './storageService';

const DEFAULT_MUTED = true;

@Service()
export class SourceService {
  private readonly obsService: ObsService = Container.get(ObsService);
  private readonly obsHeadlessService: ObsHeadlessService = Container.get(ObsHeadlessService);
  private readonly storageService: StorageService = Container.get(StorageService);

  private sources: Record<number, Source> = {};
  private previewSource?: Source;
  private programTransition?: Transition;
  private liveSource?: Source;

  public async initialize() {
    // Initialize local obs
    this.obsService.initialize();

    // Initialize remote obs
    const savedSources = this.storageService.loadSources();
    const sources = await this.obsHeadlessService.initialize(savedSources);

    let index = 0;
    for (const source of sources) {
      this.obsService.createSource(source.id, source.url, source.muted, index);
      this.sources[index] = source;
      index++;
    }

    // Create output
    const outputUrl = this.storageService.loadOutputUrl();
    if (outputUrl) {
      this.updateLiveUrl(outputUrl);
    }

    ipcMain.on('updateSource', (event, index: number, name: string, url: string, previewUrl: string) => this.updateSource(index, name, url, previewUrl));
    ipcMain.on('removeSource', (event, index: number) => this.removeSource(index));
    ipcMain.on('preview', (event, source: Source) => this.preview(source));
    ipcMain.on('take', (event, source: Source, transitionType: TransitionType, transitionDurationMs: number) => this.take(source, transitionType, transitionDurationMs));
    ipcMain.on('updateLiveUrl', (event, url: string) => this.updateLiveUrl(url));
    ipcMain.on('muteSource', (event, source: Source, mute: boolean) => this.muteSource(source, mute));

    ipcMain.on('getSources', event => event.returnValue = this.sources);
    ipcMain.on('getPreviewSource', event => event.returnValue = this.previewSource);
    ipcMain.on('getProgramTransition', event => event.returnValue = this.programTransition);
    ipcMain.on('getLiveSource', event => event.returnValue = this.liveSource);
  }

  public async updateSource(index: number, name: string, url: string, previewUrl: string) {
    const source = this.sources[index];
    if (source) {
      await this.obsHeadlessService.removeSource(source);
      await this.obsService.removeSource(source.id);
    }
    const newSourceId = await this.obsHeadlessService.addSource(name, url);
    const mute = source?.muted ?? DEFAULT_MUTED;
    this.obsService.createSource(newSourceId, previewUrl, mute, index);
    this.sources[index] = { id: newSourceId, name, url, previewUrl, muted: mute};
    this.broadcastMessage('sourcesChanged', this.sources);
    this.storageService.saveSources(this.sources);
  }

  public async removeSource(index: number) {
    const source = this.sources[index];
    if (source) {
      await this.obsHeadlessService.removeSource(source);
      await this.obsService.removeSource(source.id);
    }
    delete this.sources[index];
    this.broadcastMessage('sourcesChanged', this.sources);
    this.storageService.saveSources(this.sources);
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

  public updateLiveUrl(url: string) {
    if (url === this.liveSource?.url) {
      return;
    }
    if (this.liveSource) {
      this.obsService.removeSource(this.liveSource.id);
    }
    const sourceId = `output_${uuid.v4()}`;
    const sourceName = 'Output';
    this.liveSource = { id: sourceId, name: sourceName, url: url, previewUrl: url, muted: this.liveSource?.muted ?? DEFAULT_MUTED };
    this.obsService.createSource(sourceId, url, this.liveSource.muted);
    this.broadcastMessage('liveChanged', this.liveSource);
    this.storageService.saveOutputUrl(url);
  }

  private muteSource(source: Source, mute: boolean) {
    this.obsService.muteSource(source.id, mute);
    source.muted = mute;
    this.broadcastMessage('sourceMuteChanged', source);
  }

  private broadcastMessage(channel: string, ...args: any[]) {
    webContents.getAllWebContents().forEach(webContents => {
      webContents.send(channel, ...args);
    });
  }
}

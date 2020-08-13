import { Container, Service } from 'typedi';
import { Source, TransitionType } from '../types/obs';
import { SimpleEvent } from '../common/event';
import * as uuid from 'uuid';
import { ObsService } from './obsService';
import { ObsHeadlessService } from './obsHeadlessService';

@Service()
export class SourceService {
  private readonly obsService: ObsService = Container.get(ObsService);
  private readonly obsHeadlessService: ObsHeadlessService = Container.get(ObsHeadlessService);

  public sources: Source[] = [];
  public pvwSource?: Source;
  public pgmSource?: Source;
  public liveSource?: Source;

  public sourceAdded = new SimpleEvent<Source>();
  public pvwSourceChanged = new SimpleEvent<Source>();
  public pgmSourceChanged = new SimpleEvent<Source>();
  public liveSourceChanged = new SimpleEvent<Source | undefined>();

  public async initialize() {
    // Initialize local obs
    await this.obsService.initialize();

    // Initialize sources
    this.sources = await this.obsHeadlessService.initialize();
    for (const source of this.sources) {
      await this.obsService.createSource(source.id, source.url);
    }
  }

  public async addSource(name: string, url: string): Promise<Source> {
    const source = await this.obsHeadlessService.addSource(name, url);
    await this.obsService.createSource(source.id, source.url);
    this.sources.push(source);
    this.sourceAdded.emit(source);
    return source;
  }

  public async updateSource(id: string, name: string, url: string): Promise<Source> {
    const source = this.sources.find(s => s.id === id) as Source;
    await this.obsHeadlessService.removeSource(source);
    await this.obsService.removeSource(source.id);
    const newSource = await this.obsHeadlessService.addSource(name, url);
    source.id = newSource.id;
    source.name = name;
    source.url = url;
    return source;
  }

  public setPvwSource(source: Source): void {
    this.pvwSource = source;
    this.pvwSourceChanged.emit(this.pvwSource);
  }

  public async take(source: Source, transition: TransitionType = TransitionType.Cut): Promise<void> {
    await this.obsHeadlessService.switchSource(source);
    this.pgmSource = source;
    this.pgmSourceChanged.emit(this.pgmSource);
  }

  public async createLiveSource(url: string | undefined): Promise<void> {
    if (url === this.liveSource?.url) {
      return;
    }
    if (this.liveSource) {
      await this.obsService.removeSource(this.liveSource.id);
      this.liveSource = undefined;
    }
    if (url) {
      const sourceId = `output_${uuid.v4()}`;
      const sourceName = 'Output';
      this.liveSource = { id: sourceId, name: sourceName, url: url };
      await this.obsService.createSource(sourceId, url);
    }
    this.liveSourceChanged.emit(this.liveSource);
  }
}

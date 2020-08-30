import { Service } from 'typedi';
import { Source, Transition, TransitionType } from '../types/obs';
import { SimpleEvent } from '../common/event';
import { ipcRenderer } from 'electron';

@Service()
export class SourceService {
  public sourcesChanged = new SimpleEvent<Record<number, Source>>();
  public previewChanged = new SimpleEvent<Source>();
  public programChanged = new SimpleEvent<Transition>();
  public liveChanged = new SimpleEvent<Source | undefined>();

  public initialize(): void {
    ipcRenderer.on('sourcesChanged', (event, sources: Record<number, Source>) => {
      this.sourcesChanged.emit(sources);
    });
    ipcRenderer.on('previewChanged', (event, source: Source) => {
      this.previewChanged.emit(source);
    });
    ipcRenderer.on('programChanged', (event, transition: Transition) => {
      this.programChanged.emit(transition);
    });
    ipcRenderer.on('liveChanged', (event, source: Source) => {
      this.liveChanged.emit(source);
    });
  }

  public get sources(): Record<number, Source> {
    return ipcRenderer.sendSync('getSources');
  }

  public get previewSource(): Source {
    return ipcRenderer.sendSync('getPreviewSource');
  }

  public get programTransition(): Transition {
    return ipcRenderer.sendSync('getProgramTransition');
  }

  public get liveSource(): Source {
    return ipcRenderer.sendSync('getLiveSource');
  }

  public updateSource(index: number, name: string, url: string, previewUrl: string): void {
    ipcRenderer.send('updateSource', index, name, url, previewUrl);
  }

  public removeSource(index: number): void {
    ipcRenderer.send('removeSource', index);
  }

  public preview(source: Source): void {
    ipcRenderer.send('preview', source);
  }

  public take(source: Source, transitionType: TransitionType, transitionDurationMs: number): void {
    ipcRenderer.send('take', source, transitionType, transitionDurationMs);
  }

  public updateLiveUrl(url: string): void {
    ipcRenderer.send('updateLiveUrl', url);
  }
}

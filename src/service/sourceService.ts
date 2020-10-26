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
  public sourceMuteChanged = new SimpleEvent<Source>();
  public sourceRestarted = new SimpleEvent<Source>();

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
    ipcRenderer.on('sourceMuteChanged', (event, source: Source) => {
      this.sourceMuteChanged.emit(source);
    });
    ipcRenderer.on('sourceRestarted', (event, source: Source) => {
      this.sourceRestarted.emit(source);
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

  public muteSource(source: Source, mute: boolean): void {
    ipcRenderer.send('muteSource', source, mute);
  }

  public restart(source: Source): void {
    ipcRenderer.send('restart', source);
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

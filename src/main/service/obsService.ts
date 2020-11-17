import { Service } from 'typedi';
import * as obs from 'obs-node';
import { BrowserWindow, ipcMain } from 'electron';
import { Source, Transition, TransitionType } from '../../types/obs';

const OBS_VIDEO_SETTINGS: obs.VideoSettings = {
  baseWidth: 640,
  baseHeight: 360,
  outputWidth: 640,
  outputHeight: 360,
  fpsNum: 25,
  fpsDen: 1,
};

const OBS_AUDIO_SETTINGS: obs.AudioSettings = {
  sampleRate: 44100,
}

@Service()
export class ObsService {
  public initialize() {
    obs.startup({
      video: OBS_VIDEO_SETTINGS,
      audio: OBS_AUDIO_SETTINGS,
    });
    ipcMain.on('createOBSDisplay', (event, name: string, electronWindowId: number, scaleFactor: number, sourceId: string) =>
      event.returnValue = this.createOBSDisplay(name, electronWindowId, scaleFactor, sourceId));
    ipcMain.on('moveOBSDisplay', (event, name: string, x: number, y: number, width: number, height: number) =>
      event.returnValue = this.moveOBSDisplay(name, x, y, width, height));
    ipcMain.on('destroyOBSDisplay', (event, name: string) => event.returnValue = this.destroyOBSDisplay(name));
  }

  public createSource(source: Source): void {
    obs.addScene(source.sceneId);
    obs.addSource(source.sceneId, source.id, 'MediaSource', source.previewUrl as string);
  }

  public updateSourceUrl(source: Source): void {
    obs.updateSource(source.sceneId, source.id, source.previewUrl as string);
  }

  public createOBSDisplay(name: string, electronWindowId: number, scaleFactor: number, sourceId: string): void {
    const electronWindow = BrowserWindow.fromId(electronWindowId);
    obs.createDisplay(name, electronWindow.getNativeWindowHandle(), scaleFactor, sourceId);
  }

  public moveOBSDisplay(name: string, x: number, y: number, width: number, height: number): void {
    obs.moveDisplay(name, x, y, width, height);
  }

  public destroyOBSDisplay(name: string): void {
    obs.destroyDisplay(name);
  }

  public switchSource(from: Source | undefined, to: Source, transitionType: TransitionType, transitionDurationMs: number): Transition {
    obs.switchToScene(to.sceneId, transitionType, transitionDurationMs);
    return {
      id: transitionType,
      type: transitionType,
      source: to,
    }
  }

  public muteSource(source: Source, mute: boolean) {
    obs.muteSource(source.sceneId, source.id, mute);
  }

  public restart(source: Source) {
    obs.restartSource(source.sceneId, source.id);
  }

  public close() {
    obs.shutdown();
  }
}

import { Service } from 'typedi';
import * as obs from '../../obs-api';
import { app, BrowserWindow, ipcMain } from 'electron';
import { Source, Transition, TransitionType } from '../../types/obs';
import * as uuid from 'uuid';
import * as path from 'path';
import { EMonitoringType } from 'obs-studio-node';
import { ISceneItem } from 'obs-studio-node/module';

const DEFAULT_SOURCE_SETTINGS = {
  buffering_mb: 2,
  caching: false,
  clear_on_media_end: true,
  is_local_file: false,
  looping: false,
  close_when_inactive: false,
  restart_on_activate: false,
  speed_percent: 100,
};

const DEFAULT_BASE_RESOLUTION = '1920x1080';

@Service()
export class ObsService {
  private readonly transitions: Map<TransitionType, obs.ITransition> = new Map<TransitionType, obs.ITransition>();

  public initialize() {
    // Host a new OBS server instance
    obs.IPC.host(uuid.v4());
    obs.NodeObs.SetWorkingDirectory(
      path.join(
        app.getAppPath().replace('app.asar', 'app.asar.unpacked'),
        'node_modules',
        'obs-studio-node',
      ),
    );

    // Initialize OBS API
    obs.NodeObs.OBS_API_initAPI(
      'en-US',
      app.getPath('userData'),
      process.env.APP_VERSION || '1.0.0',
    );

    // Set default resolution, scene size will base on this value.
    this.setSetting('Video', 'Base', DEFAULT_BASE_RESOLUTION);

    ipcMain.on('createOBSDisplay', (event, electronWindowId: number, name: string, sourceId: string) => event.returnValue = this.createOBSDisplay(electronWindowId, name, sourceId));
    ipcMain.on('moveOBSDisplay', (event, name: string, x: number, y: number) => event.returnValue = this.moveOBSDisplay(name, x, y));
    ipcMain.on('resizeOBSDisplay', (event, name: string, width: number, height: number) => event.returnValue = this.resizeOBSDisplay(name, width, height));
    ipcMain.on('destroyOBSDisplay', (event, name: string) => event.returnValue = this.destroyOBSDisplay(name));
    ipcMain.on('createOBSIOSurface', (event, name: string) => event.returnValue = this.createOBSIOSurface(name));
  }

  public createSource(sourceId: string, url: string, mute: boolean, channel: number): string {
    const sceneId = uuid.v4();
    const obsScene = obs.SceneFactory.create(sceneId);

    const obsSource = obs.InputFactory.create('ffmpeg_source', sourceId, {
      ...DEFAULT_SOURCE_SETTINGS,
      input: url,
    });

    // Output channel to receive audio output
    obs.Global.setOutputSource(channel, obsScene);

    const obsSceneItem = obsScene.add(obsSource);
    this.scaleSceneItem(obsSceneItem);

    // Initialize audio
    obsSource.muted = mute;
    obsSource.monitoringType = mute ? obs.EMonitoringType.None : obs.EMonitoringType.MonitoringOnly;

    // Set audio volume
    const obsFader = obs.FaderFactory.create(obs.EFaderType.IEC);
    obsFader.attach(obsSource);
    obsFader.mul = 1;
    obsFader.deflection = 1;

    return sceneId;
  }

  public removeSource(sourceId: string): void {
    const obsSource = obs.InputFactory.fromName(sourceId);
    if (obsSource) {
      obsSource.release();
    }
  }

  public createOBSDisplay(electronWindowId: number, name: string, sourceId: string): void {
    const electronWindow = BrowserWindow.fromId(electronWindowId);
    obs.NodeObs.OBS_content_createSourcePreviewDisplay(
      electronWindow.getNativeWindowHandle(),
      sourceId,
      name,
    );
    obs.NodeObs.OBS_content_setPaddingSize(name, 0);
  }

  public moveOBSDisplay(name: string, x: number, y: number): void {
    obs.NodeObs.OBS_content_moveDisplay(name, x, y);
  }

  public resizeOBSDisplay(name: string, width: number, height: number): void {
    obs.NodeObs.OBS_content_resizeDisplay(name, width, height);
  }

  public destroyOBSDisplay(name: string): void {
    obs.NodeObs.OBS_content_destroyDisplay(name);
  }

  public createOBSIOSurface(name: string): number {
    return obs.NodeObs.OBS_content_createIOSurface(name);
  }

  public switchSource(from: Source | undefined, to: Source, transitionType: TransitionType, transitionDurationMs: number): Transition {
    let obsTransition = this.transitions.get(transitionType);
    if (!obsTransition) {
      const transitionId = uuid.v4();
      obsTransition = obs.TransitionFactory.create(transitionType, transitionId);
      this.transitions.set(transitionType, obsTransition);
    }

    if (from) {
      const fromScene = obs.SceneFactory.fromName(from.sceneId);
      obsTransition.set(fromScene);
    }

    const toScene = obs.SceneFactory.fromName(to.sceneId);

    obsTransition.start(transitionDurationMs, toScene);
    return {
      id: obsTransition.name,
      type: transitionType,
      source: to,
    };
  }

  public muteSource(sourceId: string, mute: boolean) {
    const obsSource = obs.InputFactory.fromName(sourceId);
    if (obsSource) {
      obsSource.muted = mute;
      obsSource.monitoringType = mute ? EMonitoringType.None : EMonitoringType.MonitoringOnly;
    }
  }

  private setSetting(category: string, parameter: string, value: string) {
    let oldValue: any = undefined;

    const settings = obs.NodeObs.OBS_settings_getSettings(category).data as {
      parameters: { name: string, currentValue: any }[],
    }[];

    settings.forEach(subCategory => {
      subCategory.parameters.forEach(param => {
        if (param.name === parameter) {
          oldValue = param.currentValue;
          param.currentValue = value;
        }
      });
    });

    if (value != oldValue) {
      obs.NodeObs.OBS_settings_saveSettings(category, settings);
    }
  }

  private scaleSceneItem(obsSceneItem: ISceneItem) {
    const [width, height] = DEFAULT_BASE_RESOLUTION.split('x').map(s => Number(s));
    // Calculate scale to stretch source to whole size, stream source will not get size immediately,
    // try 10s to get the scale
    let tryCount = 0;
    let scale: number | undefined = undefined;
    const tryGetScale: () => void = () => {
      if (tryCount < 10 && scale === undefined) {
        setTimeout(() => {
          if (obsSceneItem.source.width && obsSceneItem.source.height) {
            scale = Math.min(width / obsSceneItem.source.width, height / obsSceneItem.source.height);
            obsSceneItem.scale = { x: scale, y: scale };
          } else {
            tryCount++;
            tryGetScale();
          }
        }, 1000);
      }
    };

    tryGetScale();
  }
}

import { Service } from 'typedi';
import * as obs from '../obs-api';
import * as electron from "electron";
import { remote } from "electron";
import { TransitionType } from '../types/obs';
import * as uuid from 'uuid';
import path from "path";

const DEFAULT_SOURCE_SETTINGS = {
  buffering_mb: 2,
  caching: false,
  clear_on_media_end: true,
  is_local_file: false,
  looping: false,
  restart_on_activate: true,
  speed_percent: 100,
};

@Service()
export class ObsService {
  private globalTransition?: obs.ITransition;
  private globalScene?: obs.IScene;

  public async initialize() {
    // Host a new OBS server instance
    obs.IPC.host(uuid.v4());
    obs.NodeObs.SetWorkingDirectory(
      path.join(
        electron.remote.app.getAppPath().replace('app.asar', 'app.asar.unpacked'),
        'node_modules',
        'obs-studio-node',
      ),
    );

    // Initialize OBS API
    obs.NodeObs.OBS_API_initAPI(
      'en-US',
      electron.remote.app.getPath('userData'),
      electron.remote.process.env.APP_VERSION || '1.0.0',
    );

    // Add source to global transaction to make source readable
    this.globalTransition = obs.TransitionFactory.create(TransitionType.Cut, 'Global Transition');
    obs.Global.setOutputSource(0, this.globalTransition);
    this.globalScene = obs.SceneFactory.create('Global Scene');
    this.globalTransition.set(this.globalScene);
  }

  public async createSource(sourceId: string, url: string) {
    const obsSource = obs.InputFactory.create('ffmpeg_source', sourceId, {
      ...DEFAULT_SOURCE_SETTINGS,
      input: url,
    });
    if (this.globalScene) {
      this.globalScene.add(obsSource);
    }
  }

  public async removeSource(sourceId: string): Promise<void> {
    const obsSource = obs.InputFactory.fromName(sourceId);
    if (obsSource) {
      obsSource.release();
    }
  }

  public async createOBSDisplay(electronWindowId: number, name: string, sourceId: string): Promise<void> {
    const electronWindow = remote.BrowserWindow.fromId(electronWindowId);
    obs.NodeObs.OBS_content_createSourcePreviewDisplay(
      electronWindow.getNativeWindowHandle(),
      sourceId,
      name,
    );
    obs.NodeObs.OBS_content_setPaddingSize(name, 0);
  }

  public async moveOBSDisplay(name: string, x: number, y: number): Promise<void> {
    return obs.NodeObs.OBS_content_moveDisplay(name, x, y);
  }

  public async resizeOBSDisplay(name: string, width: number, height: number): Promise<void> {
    return obs.NodeObs.OBS_content_resizeDisplay(name, width, height);
  }

  public async destroyOBSDisplay(name: string): Promise<void> {
    return obs.NodeObs.OBS_content_destroyDisplay(name);
  }

  public async createOBSIOSurface(name: string): Promise<number> {
    return obs.NodeObs.OBS_content_createIOSurface(name);
  }
}

import { remote } from 'electron';
import * as uuid from 'uuid';
import * as obs from '../obs-api';
import { RenderingMode, Scene, SceneDupType, SourceSettings, SourceType, TransitionType } from '../types/obs';
import { isWorkerWindow } from './utils';
import { requestWorker } from './worker';

let globalTransition: obs.ITransition | undefined;
let globalScene: obs.IScene | undefined;

const PROGRAM_LOCAL_SCENE_NAME = 'Program Local Scene';
let programLocalScene: obs.IScene | undefined;

const PROGRAM_LIVE_SCENE_NAME = 'Program Live Scene';
let programLiveScene: obs.IScene | undefined;

function createSource(sourceId: string, sourceType: SourceType, settings: SourceSettings): obs.IInput {
  // Add source to global transition to start read stream of source.
  if (!globalTransition) {
    globalTransition = obs.TransitionFactory.create(TransitionType.Cut, 'Global Transition');
    obs.Global.setOutputSource(0, globalTransition);
  }
  if (!globalScene) {
    globalScene = obs.SceneFactory.create('Global Scene');
    globalTransition.set(globalScene);
  }
  const source = obs.InputFactory.create(sourceType, sourceId, {
    "buffering_mb": 2,
    "caching": false,
    "clear_on_media_end": true,
    "input": settings.input,
    "is_local_file": false,
    "looping": false,
    "restart_on_activate": true,
    "speed_percent": 100
  });
  globalScene.add(source);
  return source;
}

export async function createScene(sceneName: string, sourceType: SourceType, settings: SourceSettings): Promise<Scene> {
  if (!isWorkerWindow()) {
    return await requestWorker('createScene', sceneName, sourceType, settings);
  } else {
    const sceneId = `scene_${uuid.v4()}`;
    const scene = obs.SceneFactory.create(sceneId);
    const sourceId = `${sourceType}_${uuid.v4()}`;
    const source = createSource(sourceId, sourceType, settings);
    scene.add(source);
    return {
      id: sceneId,
      name: sceneName,
      sources: [{ type: sourceType, settings: settings }],
    };
  }
}

export async function createDisplay(electronWindowId: number, name: string, renderingMode: RenderingMode) {
  if (!isWorkerWindow()) {
    return await requestWorker('createDisplay', electronWindowId, name, renderingMode);
  } else {
    console.log(`OBS_content_createDisplay: ${electronWindowId}, ${name}, ${renderingMode}`);
    const electronWindow = remote.BrowserWindow.fromId(electronWindowId);
    obs.NodeObs.OBS_content_createDisplay(
      electronWindow.getNativeWindowHandle(),
      name,
      RenderingMode.OBS_MAIN_RENDERING,
    );
  }
}

export async function createOBSDisplay(electronWindowId: number, name: string, sourceId: string): Promise<void> {
  if (!isWorkerWindow()) {
    return await requestWorker('createOBSDisplay', electronWindowId, name, sourceId);
  } else {
    const electronWindow = remote.BrowserWindow.fromId(electronWindowId);
    obs.NodeObs.OBS_content_createSourcePreviewDisplay(
      electronWindow.getNativeWindowHandle(),
      sourceId,
      name,
    );
  }
}

export async function setOBSDisplayPaddingColor(name: string, r: number, g: number, b: number): Promise<void> {
  if (!isWorkerWindow()) {
    return await requestWorker('setOBSDisplayPaddingColor', name, r, g, b);
  } else {
    obs.NodeObs.OBS_content_setPaddingColor(name, r, g, b);
  }
}

export async function moveOBSDisplay(name: string, x: number, y: number): Promise<void> {
  if (!isWorkerWindow()) {
    return await requestWorker('moveOBSDisplay', name, x, y);
  } else {
    obs.NodeObs.OBS_content_moveDisplay(name, x, y);
  }
}

export async function resizeOBSDisplay(name: string, width: number, height: number): Promise<void> {
  if (!isWorkerWindow()) {
    return await requestWorker('resizeOBSDisplay', name, width, height);
  } else {
    obs.NodeObs.OBS_content_resizeDisplay(name, width, height);
  }
}

export async function destroyOBSDisplay(name: string): Promise<void> {
  if (!isWorkerWindow()) {
    return await requestWorker('destroyOBSDisplay', name);
  } else {
    obs.NodeObs.OBS_content_destroyDisplay(name);
  }
}

/**
 * Creates a shared IOSurface for a display that can be passed to
 * node-window-rendering for embedded in electron. (Mac Only)
 * @param name The name of the display
 */
export async function createOBSIOSurface(name: string): Promise<number> {
  if (!isWorkerWindow()) {
    return await requestWorker('createOBSIOSurface', name);
  } else {
    return obs.NodeObs.OBS_content_createIOSurface(name);
  }
}

export async function createProgramLocalScene(fromScene: Scene): Promise<Scene> {
  if (!isWorkerWindow()) {
    return await requestWorker('createProgramLocalScene', fromScene);
  } else {
    if (programLocalScene) {
      programLocalScene.release();
    }
    console.log(`create scene: ${JSON.stringify(fromScene)}`);
    const obsScene = obs.SceneFactory.fromName(fromScene.id);
    const sceneId = `program_local_scene_${uuid.v4()}`;
    programLocalScene = obsScene.duplicate(sceneId, SceneDupType.Copy as unknown as obs.ESceneDupType);
    return {
      id: sceneId,
      name: PROGRAM_LOCAL_SCENE_NAME,
      sources: fromScene.sources,
    };
  }
}

export async function createProgramLiveScene(outputUrl: string): Promise<Scene> {
  if (!isWorkerWindow()) {
    return await requestWorker('createProgramLiveScene', outputUrl);
  } else {
    if (programLiveScene) {
      programLiveScene.release();
    }
    const sourceId = `program_live_source_${uuid.v4()}`;
    const source = createSource(sourceId, 'ffmpeg_source', { input: outputUrl });
    const sceneId = `program_live_scene_${uuid.v4()}`;
    programLocalScene = obs.SceneFactory.create(sceneId);
    programLocalScene.add(source);
    return {
      id: sceneId,
      name: PROGRAM_LIVE_SCENE_NAME,
      sources: [{ type: 'ffmpeg_source', settings: { input: outputUrl } }],
    };
  }
}

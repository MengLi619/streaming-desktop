import { promisify } from 'util';
import * as uuid from 'uuid';
import { credentials } from 'grpc';
import { StudioClient } from '../obs-headless/studio_grpc_pb';
import { Scene } from '../types/obs';
import { SceneAddRequest, SceneAddResponse, SceneSetAsCurrentRequest, Show, ShowCreateRequest, ShowCreateResponse, ShowGetRequest, ShowGetResponse, SourceAddRequest } from '../obs-headless/studio_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { getShowId, saveShowId } from './store';
import { createScene } from './obs';

const OBS_SERVER_URL = process.env.REACT_APP_OBS_SERVER_URL;
if (!OBS_SERVER_URL) {
  throw new Error(`OBS server url should not be empty.`);
}

const client: StudioClient = new StudioClient(OBS_SERVER_URL, credentials.createInsecure(), {
  'grpc.keepalive_time_ms': 120000,
  'grpc.http2.min_time_between_pings_ms': 120000,
  'grpc.keepalive_timeout_ms': 20000,
  'grpc.http2.max_pings_without_data': 0,
  'grpc.keepalive_permit_without_calls': 1,
});

const getShow = promisify(client.showGet).bind(client);
const addShow = promisify(client.showCreate).bind(client);
const addScene = promisify(client.sceneAdd).bind(client);
const addSource = promisify(client.sourceAdd).bind(client);
const stopStudio =  promisify(client.studioStop).bind(client);
const startStudio =  promisify(client.studioStart).bind(client);
const sceneSetAsCurrent = promisify(client.sceneSetAsCurrent).bind(client);

let showId: string | undefined = getShowId();

export async function start() {
  try {
    await stopStudio(new Empty());
  } catch (e) {
    console.log(`Failed to stop obs server: ${e}`);
  }
  try {
    await startStudio(new Empty());
  } catch (e) {
    console.log(`Failed to start obs server: ${e}`);
  }
}

async function createObsHeadlessShow() {
  const showShowRequest = new ShowCreateRequest();
  showShowRequest.setShowName(`show_${uuid.v4()}`);
  const show = await addShow(showShowRequest) as ShowCreateResponse;
  showId = show.getShow()?.getId() as string;
  console.log(`Created show id: ${showId}`);
  saveShowId(showId);
  return show.getShow();
}

async function getObsHeadlessShow(): Promise<Show> {
  try {
    if (!showId) {
      return await createObsHeadlessShow() as Show;
    }
    const request = new ShowGetRequest();
    request.setShowId(showId as string);
    const response = await getShow(request) as ShowGetResponse;
    return response.getShow() as Show;
  } catch (e) {
    return await createObsHeadlessShow() as Show;
  }
}

export async function getHeadlessScenes(): Promise<Scene[]> {
  const show = await getObsHeadlessShow();
  const scenes: Scene[] = [];
  for (const scene of show.getScenesList() || []) {
    for (const source of scene.getSourcesList() || []) {
      scenes.push({
        ...await createScene(scene.getName(), 'ffmpeg_source', { input: source.getUrl() }),
        serverSceneId: scene.getId(),
      });

    }
  }
  return scenes;
}

export async function obsHeadlessCreateScene(scene: Scene) {
  // Add scene
  const sceneAddRequest = new SceneAddRequest();
  sceneAddRequest.setShowId(showId as string);
  sceneAddRequest.setSceneName(scene.name);
  scene.serverSceneId = (await addScene(sceneAddRequest) as SceneAddResponse).getScene()?.getId();

  // Add source
  for (const source of scene.sources) {
    const sourceAddRequest = new SourceAddRequest();
    sourceAddRequest.setShowId(showId as string);
    sourceAddRequest.setSceneId(scene.serverSceneId as string);
    sourceAddRequest.setSourceName(uuid.v4());
    sourceAddRequest.setSourceType('RTMP');
    sourceAddRequest.setSourceUrl(source.settings.input);
    await addSource(sourceAddRequest);
  }
}

export async function obsHeadlessSwitchScene(scene: Scene) {
  console.log(`obsHeadlessSwitchScene: ${JSON.stringify(scene)}`);
  await start();
  const request = new SceneSetAsCurrentRequest();
  request.setShowId(showId as string);
  request.setSceneId(scene.serverSceneId as string);
  await sceneSetAsCurrent(request);
}

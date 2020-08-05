import { promisify } from 'util';
import * as uuid from 'uuid';
import { credentials } from 'grpc';
import { StudioClient } from '../obs-headless/studio_grpc_pb';
import { Scene } from '../types/obs';
import { SceneAddRequest, SceneAddResponse, SceneSetAsCurrentRequest, ShowCreateRequest, ShowCreateResponse, SourceAddRequest } from '../obs-headless/studio_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

const OBS_SERVER_URL = process.env.REACT_APP_OBS_SERVER_URL;
console.log(`OBS_SERVER_URL=${OBS_SERVER_URL}`);
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

const createShow = promisify(client.showCreate).bind(client);
const addScene = promisify(client.sceneAdd).bind(client);
const addSource = promisify(client.sourceAdd).bind(client);
const startStudio =  promisify(client.studioStart).bind(client);
const sceneSetAsCurrent = promisify(client.sceneSetAsCurrent).bind(client);

let showId: string | undefined;
let started: boolean | undefined;

export async function start() {
  try {
    await startStudio(new Empty());
  } catch (e) {
    console.log(`Failed to start obs server: ${e}`);
  }
}

export async function initializeObsHeadless() {
  console.log(`initializeObsHeadless`);
  const showShowRequest = new ShowCreateRequest();
  showShowRequest.setShowName(`show_${uuid.v4()}`);
  const show = await createShow(showShowRequest) as ShowCreateResponse;
  showId = show.getShow()?.getId();
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
  if (!started) {
    await start();
    started = true;
  }
  const request = new SceneSetAsCurrentRequest();
  request.setShowId(showId as string);
  request.setSceneId(scene.serverSceneId as string);
  await sceneSetAsCurrent(request);
}

import { Service } from 'typedi';
import axios from 'axios';
import { OBS_SERVER_URL } from '../../common/constant';
import { Source, TransitionType } from '../../types/obs';
import { replaceUrlParams } from '../../common/util';

const GET_SCENES_URL = `${OBS_SERVER_URL}/v1/scenes`;
const SWITCH_URL = `${OBS_SERVER_URL}/v1/switch/:sceneId`;
const RESTART_SOURCE_URL = `${OBS_SERVER_URL}/v1/restart`;

interface SceneResponse {
  id: string;
  name: string;
  sources: SourceResponse[];
}

interface SourceResponse {
  id: string;
  name: string;
  url: string;
  previewUrl: string;
}

@Service()
export class ObsHeadlessService {

  constructor() {
    if (!OBS_SERVER_URL) {
      throw new Error(`OBS server url should not be empty.`);
    }
  }

  public async initialize(): Promise<Record<number, Source>> {
    const scenes = (await axios.get(GET_SCENES_URL)).data as SceneResponse[];
    const sources: Record<number, Source> = {};
    let index = 0;
    scenes.forEach(scene => {
      scene.sources.forEach(source => {
        sources[index++] = {
          id: source.id,
          name: source.name,
          url: source.url,
          previewUrl: source.previewUrl,
          muted: true,
          sceneId: scene.id,
          channel: index,
        };
      });
    });
    return sources;
  }

  public async switchSource(source: Source, transitionType: TransitionType, transitionDurationMs: number) {
    try {
      await axios.post(replaceUrlParams(SWITCH_URL, { sceneId: source.sceneId }), {
        transitionType: transitionType,
        transitionMs: transitionDurationMs,
      });
    } catch (e) {
      console.log(`Failed to switch scene: ${e.message || e}`);
    }
  }

  public async restart(source: Source): Promise<void> {
    try {
      await axios.post(RESTART_SOURCE_URL, {
        sceneId: source.sceneId,
        sourceId: source.id,
      });
    } catch (e) {
      console.log(`Failed to switch scene: ${e.message || e}`);
    }
  }
}

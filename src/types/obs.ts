export type AddSceneResult = {
  name: string;
  url: string;
};

export type SourceType = 'ffmpeg_source';

export interface SourceSettings {
  input: string;
}

export interface Source {
  type: SourceType;
  settings: SourceSettings;
}

export interface Scene {
  id: string;
  name: string;
  sources: Source[];
  serverSceneId?: string;
}

export type Rectangle = {
  x: number;
  y: number;
  width: number;
  height: number;
}

export enum RenderingMode {
  OBS_MAIN_RENDERING = 0,
  OBS_STREAMING_RENDERING = 1,
  OBS_RECORDING_RENDERING = 2
}

export enum TransitionType {
  Cut = 'cut_transition',
  Fade = 'fade_transition',
  Swipe = 'swipe_transition',
  Slide = 'slide_transition',
  FadeToColor = 'fade_to_color_transition',
  LumaWipe = 'wipe_transition',
  Stinger = 'obs_stinger_transition',
}

export enum SceneDupType {
  Refs,
  Copy,
  PrivateRefs,
  PrivateCopy
}

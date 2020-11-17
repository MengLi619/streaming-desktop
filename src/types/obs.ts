export interface Source {
  id: string;
  name: string;
  url: string;
  previewUrl?: string;
  muted: boolean;
  sceneId: string;
  channel?: number;
}

export interface Output {
  url: string;
  previewUrl: string;
}

export enum TransitionType {
  Cut = 'cut_transition',
  Fade = 'fade_transition',
  Swipe = 'swipe_transition',
  Slide = 'slide_transition',
}

export interface Transition {
  id: string;
  type: TransitionType;
  source: Source;
}

export interface Bounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

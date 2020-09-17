export type Source = {
  id: string;
  name: string;
  url: string;
  previewUrl?: string;
  muted: boolean;
  sceneId: string;
  channel?: number;
}

export enum TransitionType {
  Cut = 'cut_transition',
  Fade = 'fade_transition',
  Swipe = 'swipe_transition',
  Slide = 'slide_transition',
}

export type Transition = {
  id: string;
  type: TransitionType;
  source: Source;
};

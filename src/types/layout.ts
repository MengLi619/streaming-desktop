import * as React from 'react';

export type LayoutType = 'Default';

export type ElementType = 'Scenes' | 'Preview' | 'ProgramLocal' | 'ProgramLive';

export type Layout = {
  type: LayoutType,
  className: string;
  slots: string[];
  component: React.ComponentType;
};

export type LayoutElement = {
  type: ElementType;
  title: string;
  component: React.ComponentType;
};

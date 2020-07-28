import { Scenes } from '../component/elements/scenes/scenes';
import { Preview } from '../component/elements/preview/preview';
import { ProgramLocal } from '../component/elements/programLocal/programLocal';
import { ProgramLive } from '../component/elements/programLive/programLive';
import DefaultLayout from '../component/screen/layout/layouts/defaultLayout';
import { BaseLayout } from '../component/screen/layout/layouts/baseLayout';
import { BaseElement } from '../component/elements/baseElement';

export enum Layout {
  Default = 'Default',
}

export enum LayoutElement {
  Scenes = 'Scenes',
  Preview = 'Preview',
  ProgramLocal = 'ProgramLocal',
  ProgramLive = 'ProgramLive',
}

export const layoutSlots = ['1', '2', '3', '4'];

export type LayoutSlot = typeof layoutSlots[number];

export type IVec2 = {
  x: number;
  y: number;
}

export type IVec2Array = Array<IVec2Array | IVec2>;

type ElementData = {
  title: string;
  component: typeof BaseElement;
};

type LayoutData = {
  resizeDefaults: { bar1: number; bar2: number };
  isColumns: boolean;
  className: string;
  component: typeof BaseLayout;
};

export const layoutData: Record<Layout, LayoutData> = {
  [Layout.Default]: {
    resizeDefaults: { bar1: 156, bar2: 240 },
    isColumns: false,
    className: 'default',
    component: DefaultLayout,
  },
};

export const elementData: Record<LayoutElement, ElementData> = {
  [LayoutElement.Scenes]: {
    title: 'Scenes',
    component: Scenes,
  },
  [LayoutElement.Preview]: {
    title: 'Preview',
    component: Preview,
  },
  [LayoutElement.ProgramLocal]: {
    title: 'Program Local',
    component: ProgramLocal,
  },
  [LayoutElement.ProgramLive]: {
    title: 'Program Live',
    component: ProgramLive,
  },
};

export const layoutService = new class LayoutService {
  private currentLayout: Layout = Layout.Default;
  public readonly slottedElements: Partial<Record<LayoutElement, { slot?: string }>> = {};

  public get isColumnLayout(): boolean {
    return layoutData[this.currentLayout].isColumns;
  }

  public get resizes(): { bar1: number; bar2: number } {
    return layoutData[this.currentLayout].resizeDefaults;
  }

  public get layoutComponent(): typeof BaseLayout {
    return layoutData[this.currentLayout].component;
  }

  public elementComponent(element: LayoutElement) {
    return elementData[element].component;
  }

  public slotComponent(slot: LayoutSlot) {
    const element = (Object.keys(this.slottedElements) as LayoutElement[])
      .find(el => this.slottedElements[el]?.slot === slot);
    return element ? this.elementComponent(element) : undefined;
  }

  public setBarResize(bar: 'bar1' | 'bar2', size: number) {
    layoutData[this.currentLayout].resizeDefaults[bar] = size;
  }

  public calculateColumnTotal(slots: IVec2Array) {
    let totalWidth = 0;
    slots.forEach(slot => {
      if (Array.isArray(slot)) {
        totalWidth += this.calculateMinimum('x', slot);
      } else if (slot) {
        totalWidth += slot.x;
      }
    });
    return totalWidth;
  }

  public calculateMinimum(orientation: 'x' | 'y', slots: IVec2Array) {
    const aggregateMins: number[] = [];
    const minimums = [];
    slots.forEach(slot => {
      if (Array.isArray(slot)) {
        aggregateMins.push(this.aggregateMinimum(orientation, slot));
      } else {
        minimums.push(slot[orientation]);
      }
    });
    if (!minimums.length) minimums.push(10);
    return Math.max(...minimums, ...aggregateMins);
  }

  public aggregateMinimum(orientation: 'x' | 'y', slots: IVec2Array) {
    const minimums = slots.map(mins => {
      if (mins && !Array.isArray(mins)) {
        return mins[orientation];
      }
      return 10;
    });
    if (!minimums.length) minimums.push(10);
    return minimums.reduce((a: number, b: number) => a + b);
  }
}

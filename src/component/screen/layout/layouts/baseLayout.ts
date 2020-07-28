import React from 'react';
import { IVec2Array, LayoutSlot } from '../../../../util/layout';
import { BaseElement } from '../../../elements/baseElement';
import { nextTick, notEmpty } from '../../../../util/util';

export class LayoutProps {
  resizeStartHandler: () => void = () => {};
  resizeStopHandler: () => void = () => {};
  calculateMin: (slots: IVec2Array) => number = () => 0;
  calculateMax: (mins: number) => number = () => 0;
  setBarResize: (bar: 'bar1' | 'bar2', size: number, mins?: IResizeMins) => void = () => {};
  windowResizeHandler: (mins: IResizeMins, isChat?: boolean) => void = () => {};
  resizes: { bar1: number; bar2: number } = { bar1: 0, bar2: 0 };
  elWidth: number = 0;
}

export interface IResizeMins {
  rest: number;
  bar1: number;
  bar2: number;
}

interface ILayoutSlotArray extends Array<ILayoutSlotArray | LayoutSlot> {}

export class BaseLayout extends React.Component<LayoutProps> {
  mins: IResizeMins = { rest: 0, bar1: 0, bar2: 0 };
  firstRender: boolean = false;

  mountResize() {
    window.addEventListener('resize', () => this.props.windowResizeHandler(this.mins));
    if (this.bar1 < this.mins.bar1) this.props.setBarResize('bar1', this.mins.bar1);
    if (this.mins.bar2 && this.bar2 < this.mins.bar2) {
      this.props.setBarResize('bar2', this.mins.bar2);
    }
    this.props.windowResizeHandler(this.mins);
  }
  destroyResize() {
    window.removeEventListener('resize', () => this.props.windowResizeHandler(this.mins));
  }

  async setMins(restSlots: ILayoutSlotArray, bar1Slots: ILayoutSlotArray) {
    const rest = await this.calculateMinimum(restSlots);
    const bar1 = await this.calculateMinimum(bar1Slots);
    this.mins = { rest, bar1, bar2: 0 };
  }

  async minsFromSlot(slot: LayoutSlot) {
    // Before we can access the componentInstance at least one render cycle needs to run
    if (!this.firstRender) await nextTick();
    this.firstRender = true;
    const element = (this.props.children as BaseElement[]).find(el => el.props.slot === slot);
    return element ? element.mins : { x: 0, y: 0 };
  }

  async calculateMinimum(slots: ILayoutSlotArray) {
    if (!slots) {
      return 0;
    }
    const mins = await this.mapVectors(slots);
    return this.props.calculateMin(mins);
  }

  async mapVectors(slots: ILayoutSlotArray): Promise<IVec2Array> {
    return Promise.all(
      slots.map(async slot => {
        if (Array.isArray(slot)) return this.mapVectors(slot);
        return this.minsFromSlot(slot);
      }),
    );
  }

  get totalWidth() {
    return this.props.elWidth;
  }

  updateSize() {
    this.props.windowResizeHandler(this.mins, true);
  }

  get bar1(): number {
    return 0;
  }
  get bar2(): number {
    return 0;
  }
}

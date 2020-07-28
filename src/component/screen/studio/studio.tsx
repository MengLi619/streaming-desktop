import React, { RefObject } from 'react';
import { IVec2Array, LayoutElement, layoutService } from '../../../util/layout';
import { IResizeMins } from '../layout/layouts/baseLayout';
import { notEmpty } from '../../../util/util';
import { eventEmitter } from '../../../util/eventEmitter';

export class Studio extends React.Component {
  private max: number = 0;
  private elWidth: number = 0;
  private interval?: number;
  private ref: RefObject<HTMLDivElement>;

  constructor(props: {}) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    const ref = notEmpty(this.ref.current);
    this.max = this.isColumns
      ? ref.getBoundingClientRect().width
      : ref.getBoundingClientRect().height;
    this.interval = window.setInterval(() =>
      this.elWidth = ref.getBoundingClientRect().width, 500);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  get isColumns() {
    return layoutService.isColumnLayout;
  }

  get slottedElements() {
    return layoutService.slottedElements;
  }

  get resizes() {
    return layoutService.resizes;
  }

  windowResizeHandler(mins: IResizeMins, isChat?: boolean) {
    if (isChat && !this.isColumns) return;

    const oldMax = this.max;

    // This is the maximum size we can use
    if (this.ref.current) {
      this.max = this.isColumns
        ? this.ref.current.getBoundingClientRect().width
        : this.ref.current.getBoundingClientRect().height;
    }

    if (this.max === 0) {
      this.max = oldMax;
      return;
    }

    this.resizeByRatio(oldMax);
    this.reconcileSizeWithinContraints(mins);
  }

  resizeByRatio(oldMax: number) {
    if (this.max === oldMax || !oldMax || !this.max) return;

    const ratio = this.max / oldMax;
    if (ratio === 0) return;
    this.setBarResize('bar1', Math.round(this.resizes.bar1 * ratio));
    if (this.resizes.bar2) {
      this.setBarResize('bar2', Math.round(this.resizes.bar2 * ratio));
    }
  }

  /**
   * Makes sure both resizable elements are reasonable sizes that
   * fit within the window. If together they are larger than the
   * max, then the primary view will be reduced in size until a reasonable
   * minimum, at which point the secondary will start being reduced in size.
   */
  async reconcileSizeWithinContraints(mins: IResizeMins) {
    const functionalMax = this.calculateMax(mins.rest);
    if (this.underMaxSize(functionalMax)) return;

    if (this.resizes.bar1 > mins.bar1) {
      const remainingSpace = mins.bar2 ? functionalMax - this.resizes.bar2 : functionalMax;
      await this.setBarResize('bar1', Math.max(remainingSpace, mins.bar1));
      if (this.underMaxSize(functionalMax)) return;
    }
    if (!mins.bar2) return;
    if (this.resizes.bar2 > mins.bar2) {
      const oldBar2 = this.resizes.bar2;
      await this.setBarResize('bar2', Math.max(functionalMax - mins.bar1, mins.bar2));
      await this.setBarResize('bar1', this.resizes.bar1 - (this.resizes.bar2 - oldBar2));
      if (this.underMaxSize(functionalMax)) return;
    }
    // The final strategy is to just split the remaining space
    this.setBarResize('bar1', functionalMax / 2);
    this.setBarResize('bar2', functionalMax / 2);
  }

  calculateMin(slots: IVec2Array) {
    return layoutService.calculateMinimum(this.isColumns ? 'x' : 'y', slots);
  }

  totalWidthHandler(slots: IVec2Array) {
    if (this.isColumns) {
      eventEmitter.emit('totalWidth', layoutService.calculateColumnTotal(slots));
    } else {
      eventEmitter.emit('totalWidth', layoutService.calculateMinimum('x', slots));
    }
  }

  calculateMax(restMin: number) {
    return this.max - restMin;
  }

  underMaxSize(max: number) {
    if (this.resizes.bar2 == null) {
      return this.resizes.bar1 <= max;
    }
    return this.resizes.bar1 + this.resizes.bar2 <= max;
  }

  async setBarResize(bar: 'bar1' | 'bar2', size: number, mins?: IResizeMins) {
    await layoutService.setBarResize(bar, size);
    if (mins) {
      this.reconcileSizeWithinContraints(mins);
    }
  }

  render() {
    const Layout = layoutService.layoutComponent;
    const slottedElements = layoutService.slottedElements;
    return (
      <div className='editor-page' ref={this.ref}>
        <Layout
          resizeStartHandler={() => {}}
          resizeStopHandler={() => {}}
          calculateMin={(slots: IVec2Array) => this.calculateMin(slots)}
          calculateMax={(min: number) => this.calculateMax(min)}
          setBarResize={(bar: 'bar1' | 'bar2', size: number, mins?: IResizeMins) =>
            this.setBarResize(bar, size, mins)
          }
          windowResizeHandler={(mins: IResizeMins, isChat?: boolean) =>
            this.windowResizeHandler(mins)
          }
          resizes={this.resizes}
          elWidth={this.elWidth}>
          {
            (Object.keys(slottedElements) as LayoutElement[]).map(
              (element: LayoutElement) => {
                const Element = layoutService.elementComponent(element);
                return <Element />;
              },
            )
          }
        </Layout>
      </div>
    );
  }
}

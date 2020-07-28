import './layouts.scss';
import React from 'react';
import { BaseLayout } from './baseLayout';
import ResizeBar from '../../../shared/ResizeBar';
import { eventEmitter } from '../../../../util/eventEmitter';
import { layoutService } from '../../../../util/layout';

export default class DefaultLayout extends BaseLayout {

  public async componentDidMount() {
    this.mountResize();
    this.setMins(['1', '2', '3'], ['4']);
    eventEmitter.emit('totalWidth', this, await this.mapVectors([['1', '2', '3'], '4']));
  }

  componentWillUnmount() {
    this.destroyResize();
  }

  get bar1() {
    return this.props.resizes.bar1;
  }

  set bar1(size: number) {
    this.props.setBarResize('bar1', size, this.mins);
  }

  render() {
    return (
      <div className='rows'>
        <div className='cell' style={{ height: `calc(100% - ${this.bar1}px)` }}>
          {
            ['1', '2', '3'].map(slot =>
              <div className='cell'>
                {
                  layoutService.slotComponent(slot)
                }
              </div>
            )
          }
        </div>
        <ResizeBar
          position="top"
          value={this.bar1}
          onValueChanged={value => this.bar1 = value }
          onResizestart={() => this.props.resizeStartHandler()}
          onResizestop={() => this.props.resizeStopHandler()}
          max={this.props.calculateMax(this.mins.rest + this.bar2)}
          min={this.mins.bar1}
          reverse={true}
        />
        <div style={{ height: `${this.bar1}px` }} className='cell noTopPadding'>
          {
            layoutService.slotComponent('4')
          }
        </div>
      </div>
    );
  }
}

import React, { RefObject } from 'react';
import { notEmpty } from '../../util/util';
import { LayoutSlot } from '../../util/layout';

type Props = {
  slot?: LayoutSlot;
}

export class BaseElement extends React.Component<Props> {
  mins = { x: 0, y: 0 };
  interval: number = 1000;
  belowMins = false;
  height = 0;
  width = 0;
  ref: RefObject<HTMLDivElement> = React.createRef();

  componentDidMount() {
    const element = notEmpty(this.ref.current);
    this.height = element.getBoundingClientRect().height;
    this.width = element.getBoundingClientRect().width;
    this.interval = window.setInterval(() => {
      this.height = element.getBoundingClientRect().height;
      this.width = element.getBoundingClientRect().width;
      this.belowMins = this.height + 26 < this.mins.y || this.width + 26 < this.mins.x;
    }, 500);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  get belowMinWarning() {
    return (
      <div className='container' ref={this.ref}>
        <span className='empty'>This element is too small to be displayed</span>
      </div>
    );
  }

  get element() {
    return <div />;
  }

  renderElement() {
    return this.belowMins ? this.belowMinWarning : this.element;
  }
}

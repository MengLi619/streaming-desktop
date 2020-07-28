import React, { RefObject, MouseEvent as ReactMouseEvent } from 'react';
import './resizeBar.scss';

class ResizeBarProps {
  // the side of the external container to stick ResizeBar to
  position: 'left' | 'right' | 'top' = 'left';
  value: number = 0;
  min: number = -Infinity;
  max: number = Infinity;
  // by default ResizeBar increases the value when move to bottom/right
  // and decreases when move to left/top
  // change this option to reverse this behavior
  reverse: boolean = false;
  onResizestart: () => void = () => {};
  onResizestop: () => void = () => {};
  onValueChanged: (value: number) => void = () => {};
}

export default class ResizeBar extends React.Component<ResizeBarProps> {
  active = false; // true when it's dragging
  transform = ''; // css-transform prop ResizeBar

  private barOffset = 0;
  private mouseInitial = 0;
  private ref: RefObject<HTMLDivElement> = React.createRef();

  private get hasConstraints() {
    return this.props.max !== Infinity || this.props.min !== -Infinity;
  }

  onMouseDownHandler(event: ReactMouseEvent) {
    // Handle cases where the window size is too small to allow resizing
    if (this.props.max <= this.props.min) return;
    this.startMouseTracking(event);
  }

  startMouseTracking(event: ReactMouseEvent) {
    this.active = true;
    const mouseMoveListener = (event: MouseEvent) => this.onMouseMoveHandler(event);
    const element = this.ref.current;
    if (element) {
      element.addEventListener('mousemove', mouseMoveListener);
      element.addEventListener(
        'mouseup',
        (event: MouseEvent) => {
          element.removeEventListener('mousemove', mouseMoveListener);
          this.stopMouseTracking(event);
        },
        { once: true },
      );
      element.addEventListener(
        'mouseleave',
        (event: MouseEvent) => {
          element.removeEventListener('mousemove', mouseMoveListener);
          this.stopMouseTracking(event);
        },
        { once: true },
      );

      this.mouseInitial = this.isHorizontal ? event.pageX : event.pageY;
      this.props.onResizestart();
    }
  }

  stopMouseTracking(event: MouseEvent) {
    this.active = false;
    let offset = this.barOffset;
    if (this.props.reverse) offset = -offset;
    this.barOffset = 0;
    this.mouseInitial = 0;
    this.updateTransform();
    this.props.onResizestop();
    this.props.onValueChanged(offset + this.props.value);
  }

  onMouseMoveHandler(event: MouseEvent) {
    const mouseOffset = (this.isHorizontal ? event.pageX : event.pageY) - this.mouseInitial;

    // handle max and min constraints
    if (this.hasConstraints) {
      const value = this.props.reverse
        ? this.props.value - mouseOffset
        : this.props.value + mouseOffset;

      if (value > this.props.max) {
        this.barOffset = this.props.reverse
          ? this.props.value - this.props.max
          : this.props.max - this.props.value;
      } else if (value < this.props.min) {
        this.barOffset = this.props.reverse
          ? this.props.value - this.props.min
          : this.props.min - this.props.value;
      } else {
        this.barOffset = mouseOffset;
      }
    } else {
      this.barOffset = mouseOffset;
    }

    this.updateTransform();
  }

  get isHorizontal() {
    return ['left', 'right'].includes(this.props.position);
  }

  render() {
    const position = this.props.position;
    return (
      <div
        ref={this.ref}
        className={[
          'resize-bar',
          position === 'top' ? 'top' : '',
          position === 'right' ? 'right' : '',
          position === 'left' ? 'left' : '',
        ].join(' ')}
        onMouseDown={(e: ReactMouseEvent) => this.onMouseDownHandler(e)}>
        <div className="resize-line"/>
      </div>
    );
  }

  private updateTransform() {
    this.transform = this.isHorizontal
      ? `translateX(${this.barOffset}px)`
      : `translateY(${this.barOffset}px)`;
  }
}

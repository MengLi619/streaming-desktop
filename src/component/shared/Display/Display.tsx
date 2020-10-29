import './Display.scss';
import * as uuid from 'uuid';
import React, { RefObject } from 'react';
import { remote } from "electron";
import { getScaleFactor, isMac } from '../../../common/util';
import { Container } from 'typedi';
import { DisplayService } from '../../../service/displayService';
import { Bounds } from "../../../types/obs";

type DisplayProps = {
  sourceId: string;
}

const DISPLAY_ELEMENT_POLLING_INTERVAL = 500;

export class Display extends React.Component<DisplayProps> {
  private readonly displayService = Container.get(DisplayService);
  private readonly electronWindowId: number;
  private readonly name: string;
  private currentPosition: Bounds = { x: 0, y: 0, width: 0, height: 0 };
  private trackingInterval?: number;
  private ref: RefObject<HTMLDivElement> = React.createRef();

  constructor(props: DisplayProps) {
    super(props);
    this.name = uuid.v4();
    this.electronWindowId = remote.getCurrentWindow().id;
  }

  public componentDidMount() {
    if (this.ref.current) {
      const scaleFactor = getScaleFactor();
      this.displayService.createOBSDisplay(this.name, this.electronWindowId, scaleFactor, this.props.sourceId);
      this.trackElement(this.ref.current);
    }
  }

  public componentWillUnmount() {
    if (this.trackingInterval) {
      clearInterval(this.trackingInterval);
    }
    this.displayService.destroyOBSDisplay(this.name)
  }

  public render() {
    return (
      <div className="Display" ref={this.ref} />
    );
  }

  private trackElement(element: HTMLElement) {
    if (this.trackingInterval) {
      clearInterval(this.trackingInterval);
    }
    const trackingFun = () => {
      const rect = this.getCurrentPosition(element.getBoundingClientRect());
      if (
        rect.x !== this.currentPosition.x ||
        rect.y !== this.currentPosition.y ||
        rect.width !== this.currentPosition.width ||
        rect.height !== this.currentPosition.height) {
        this.move(rect.x, rect.y, rect.width, rect.height);
      }
    };
    trackingFun();
    this.trackingInterval = window.setInterval(trackingFun, DISPLAY_ELEMENT_POLLING_INTERVAL);
  }

  private getCurrentPosition(rect: ClientRect): Bounds {
    // Windows: Top-left origin
    // Mac: Bottom-left origin
    const y = isMac() ? window.innerHeight - rect.bottom : rect.top;

    return {
      x: rect.left + 1,
      y: y - 1,
      width: rect.width - 2,
      height: rect.height - 2,
    };
  }

  private move(x: number, y: number, width: number, height: number) {
    this.currentPosition.x = x;
    this.currentPosition.y = y;
    this.currentPosition.width = width;
    this.currentPosition.height = height;
    this.displayService.moveOBSDisplay(this.name, x, y, width, height);
  }
}

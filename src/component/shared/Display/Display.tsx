import './Display.scss';
import * as uuid from 'uuid';
import React, { RefObject } from 'react';
import { remote } from "electron";
import { isMac, getScaleFactor } from '../../../common/util';
import { Container } from 'typedi';
import { DisplayService } from '../../../service/displayService';

export type Rectangle = {
  x: number;
  y: number;
  width: number;
  height: number;
}

type DisplayProps = {
  sourceId: string;
}

// TODO: There are no typings for nwr
let nwr: any;

// NWR is used to handle display rendering via IOSurface on mac
if (isMac()) {
  nwr = remote.require('node-window-rendering');
}

const DISPLAY_ELEMENT_POLLING_INTERVAL = 500;

export class Display extends React.Component<DisplayProps> {
  private readonly displayService = Container.get(DisplayService);
  private readonly electronWindowId: number;
  private readonly name: string;
  private currentPosition: Rectangle = { x: 0, y: 0, width: 0, height: 0 };
  private trackingInterval?: number;
  private ref: RefObject<HTMLDivElement> = React.createRef();
  private existingWindow = false;

  constructor(props: DisplayProps) {
    super(props);
    this.name = uuid.v4();
    this.electronWindowId = remote.getCurrentWindow().id;
  }

  public componentDidMount() {
    this.displayService.createOBSDisplay(this.electronWindowId, this.name, this.props.sourceId);
    if (this.ref.current) {
      this.trackElement(this.ref.current);
    }
  }

  public componentWillUnmount() {
    if (this.trackingInterval) {
      clearInterval(this.trackingInterval);
    }
    this.displayService.destroyOBSDisplay(this.name)
    if (isMac()) {
      nwr.destroyWindow(this.name);
      nwr.destroyIOSurface(this.name);
    }
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
        this.resize(rect.width, rect.height);
        this.move(rect.x, rect.y);
      }
    };
    trackingFun();
    this.trackingInterval = window.setInterval(trackingFun, DISPLAY_ELEMENT_POLLING_INTERVAL);
  }

  private getCurrentPosition(rect: ClientRect): Rectangle {
    const scaleFactor = isMac() ? 1 : getScaleFactor();

    // Windows: Top-left origin
    // Mac: Bottom-left origin
    const yCoord = isMac() ? window.innerHeight - rect.bottom : rect.top;

    return {
      x: (rect.left + 1) * scaleFactor,
      y: (yCoord + 1) * scaleFactor,
      width: (rect.width - 2) * scaleFactor,
      height: (rect.height - 2) * scaleFactor,
    };
  }

  private move(x: number, y: number) {
    this.currentPosition.x = x;
    this.currentPosition.y = y;
    if (isMac()) {
      nwr.moveWindow(this.name, x, y);
    } else {
      this.displayService.moveOBSDisplay(this.name, x, y);
    }
  }

  private resize(width: number, height: number) {
    this.currentPosition.width = width;
    this.currentPosition.height = height;
    this.displayService.resizeOBSDisplay(this.name, width, height);

    // On mac, resizing the display is not enough, we also have to
    // recreate the window and IOSurface for the new size
    if (isMac()) {
      if (this.existingWindow) {
        nwr.destroyWindow(this.name);
        nwr.destroyIOSurface(this.name);
      }

      const surface = this.displayService.createOBSIOSurface(this.name);
      nwr.createWindow(
        this.name,
        remote.BrowserWindow.fromId(this.electronWindowId).getNativeWindowHandle(),
      );
      nwr.connectIOSurface(this.name, surface);
      this.existingWindow = true;
    }
  }
}

import './Display.scss';
import * as uuid from 'uuid';
import React, { RefObject } from 'react';
import { remote } from "electron";
import { isMac } from '../../../common/util';
import { Container } from 'typedi';
import { ObsService } from '../../../service/obsService';

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
const FIX_RATIO = 9 / 16;

export class Display extends React.Component<DisplayProps> {
  private readonly obsService = Container.get(ObsService);
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

  async componentDidMount() {
    await this.obsService.createOBSDisplay(this.electronWindowId, this.name, this.props.sourceId);
    if (this.ref.current) {
      this.trackElement(this.ref.current);
    }
  }

  async componentWillUnmount() {
    if (this.trackingInterval) {
      clearInterval(this.trackingInterval);
    }
    await this.obsService.destroyOBSDisplay(this.name)
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
    const trackingFun = async () => {
      const rect = this.getCurrentPosition(element.getBoundingClientRect());
      if (
        rect.x !== this.currentPosition.x ||
        rect.y !== this.currentPosition.y ||
        rect.width !== this.currentPosition.width ||
        rect.height !== this.currentPosition.height) {
        await this.resize(rect.width, rect.height);
        await this.move(rect.x, rect.y);
      }
    };
    trackingFun();
    this.trackingInterval = window.setInterval(trackingFun, DISPLAY_ELEMENT_POLLING_INTERVAL);
  }

  getCurrentPosition(rect: ClientRect): Rectangle {
    // Windows: Top-left origin
    // Mac: Bottom-left origin
    const yCoord = isMac() ? window.innerHeight - rect.bottom : rect.top;

    return {
      x: rect.left,
      y: yCoord,
      width: rect.width,
      height: rect.height,
    };
  }

  async move(x: number, y: number) {
    this.currentPosition.x = x;
    this.currentPosition.y = y;
    if (isMac()) {
      nwr.moveWindow(this.name, x, y);
    } else {
      await this.obsService.moveOBSDisplay(this.name, x, y);
    }
  }

  async resize(width: number, height: number) {
    this.currentPosition.width = width;
    this.currentPosition.height = height;
    await this.obsService.resizeOBSDisplay(this.name, width, height);

    // On mac, resizing the display is not enough, we also have to
    // recreate the window and IOSurface for the new size
    if (isMac()) {
      if (this.existingWindow) {
        nwr.destroyWindow(this.name);
        nwr.destroyIOSurface(this.name);
      }

      const surface = await this.obsService.createOBSIOSurface(this.name);
      nwr.createWindow(
        this.name,
        remote.BrowserWindow.fromId(this.electronWindowId).getNativeWindowHandle(),
      );
      nwr.connectIOSurface(this.name, surface);
      this.existingWindow = true;
    }
  }
}

import './Display.scss';
import * as uuid from 'uuid';
import React, { RefObject } from 'react';
import { remote } from "electron";
import { getOS, isMac, OS } from '../../../util/operating-systems';
import { createOBSDisplay, createOBSIOSurface, destroyOBSDisplay, moveOBSDisplay, resizeOBSDisplay, setOBSDisplayPaddingColor } from '../../../util/obs';
import { Rectangle } from '../../../types/obs';

interface DisplayProps {
  sourceId: string;
}

// TODO: There are no typings for nwr
let nwr: any;

// NWR is used to handle display rendering via IOSurface on mac
if (getOS() === OS.Mac) {
  nwr = remote.require('node-window-rendering');
}

const DISPLAY_ELEMENT_POLLING_INTERVAL = 500;

export class Display extends React.Component<DisplayProps> {
  private readonly name: string;
  private readonly electronWindowId: number;
  private currentPosition: Rectangle = { x: 0, y: 0, width: 0, height: 0 };
  private trackingInterval?: number;
  private ref: RefObject<HTMLDivElement> = React.createRef();
  private existingWindow = false;

  constructor(props: DisplayProps) {
    super(props);
    this.name = uuid.v4();
    this.electronWindowId = remote.getCurrentWindow().id;
    console.log('display constructor');
  }

  async componentDidMount() {
    console.log(`createOBSDisplay: ${this.electronWindowId}, ${this.name}, ${this.props.sourceId}`);
    await createOBSDisplay(this.electronWindowId, this.name, this.props.sourceId);
    await setOBSDisplayPaddingColor(this.name, 11, 22, 28);
    if (this.ref.current) {
      this.trackElement(this.ref.current);
    }
  }

  async componentWillUnmount() {
    console.log(`destroyOBSDisplay: ${this.name}`);
    await destroyOBSDisplay(this.name)
    if (isMac()) {
      nwr.destroyWindow(this.name);
      nwr.destroyIOSurface(this.name);
    }
  }

  render() {
    return (
      <div className="display" ref={this.ref} />
    );
  }

  /**
   * Will keep the display positioned on top of the passed HTML element
   * @param element the html element to host the display
   */
  trackElement(element: HTMLElement) {
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
      console.log(`move window ${this.name} ${x} ${y}`);
      nwr.moveWindow(this.name, x, y);
    } else {
      await moveOBSDisplay(this.name, x, y);
    }
  }

  async resize(width: number, height: number) {
    this.currentPosition.width = width;
    this.currentPosition.height = height;
    await resizeOBSDisplay(this.name, width, height);

    // On mac, resizing the display is not enough, we also have to
    // recreate the window and IOSurface for the new size
    if (getOS() === OS.Mac) {
      if (this.existingWindow) {
        nwr.destroyWindow(this.name);
        nwr.destroyIOSurface(this.name);
      }

      const surface = await createOBSIOSurface(this.name);
      nwr.createWindow(
        this.name,
        remote.BrowserWindow.fromId(this.electronWindowId).getNativeWindowHandle(),
      );
      nwr.connectIOSurface(this.name, surface);
      this.existingWindow = true;
    }
  }
}

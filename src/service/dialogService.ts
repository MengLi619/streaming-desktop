import { ipcRenderer, remote } from 'electron';
import * as uuid from 'uuid';
import { Service } from 'typedi';
import { DialogComponent, DialogOptions } from '../types/dialog';
import { isDialogWindow, isMainWindow } from '../common/util';
import { SimpleEvent } from '../common/event';

export type SessionId = string;
type Resolver = (result: any) => void;

export type ShowDialogRequest = {
  sessionId: SessionId;
  component: DialogComponent;
  title: string;
};

@Service()
export class DialogService {
  private readonly resolvers: Map<SessionId, Resolver> = new Map<SessionId, Resolver>();
  public showDialogRequested = new SimpleEvent<ShowDialogRequest>();

  constructor() {
    if (isDialogWindow()) {
      ipcRenderer.on('showDialog', (event, sessionId: SessionId, options: DialogOptions) => {
        console.log(`onShowDialog = ${JSON.stringify(options)}`);
        this.showDialogRequested.emit({
          sessionId: sessionId,
          component: options.component,
          title: options.title,
        });
        const dialogWindow = remote.getCurrentWindow();
        dialogWindow.setSize(options.width, options.height);
        dialogWindow.center();
        dialogWindow.show();
      });
    } else if (isMainWindow()) {
      ipcRenderer.on('dialogClosed', (event, sessionId: SessionId, result: any) => {
        const resolver = this.resolvers.get(sessionId);
        if (!resolver) {
          console.log(`Unexpected behaviour: cannot find resolver`);
          return;
        }
        this.resolvers.delete(sessionId);
        resolver(result);
      });
    }
  }

  public showDialog<T>(options: DialogOptions): Promise<T | undefined> {
    if (!isMainWindow()) {
      throw new Error(`Only main window can request show dialog.`);
    }
    const sessionId: SessionId = uuid.v4();
    ipcRenderer.send('showDialog', sessionId, options);
    return new Promise(resolve => {
      this.resolvers.set(sessionId, resolve);
    });
  }

  public closeDialog(sessionId: SessionId, result: any) {
    if (!isDialogWindow()) {
      throw new Error(`Only dialog window can request dialog closed.`);
    }
    remote.getCurrentWindow().hide();
    ipcRenderer.send('dialogClosed', sessionId, result);
  }
}

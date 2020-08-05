import { ipcRenderer } from 'electron';

export type DialogOptions = {
  component: string;
  title: string;
  width: number;
  height: number;
};

export function showDialog<T>(options: DialogOptions): Promise<T | undefined> {
  ipcRenderer.send('showDialog', options);
  return new Promise<T>(resolve => {
    ipcRenderer.once('dialogConfirmed', (event, data) => {
      resolve(data as T);
    });
    ipcRenderer.once('dialogCanceled', () => {
      resolve(undefined);
    })
  });
}

export function cancelDialog() {
  ipcRenderer.send('cancelDialog');
}

export function confirmDialog<T>(data: T) {
  ipcRenderer.send('confirmDialog', data);
}

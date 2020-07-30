import { ipcRenderer } from 'electron';
import * as fs from 'fs';

export type DialogOptions = {
  component: string;
  title: string;
  width: number;
  height: number;
};

export function showDialog(options: DialogOptions) {
  ipcRenderer.send('showDialog', options);
}

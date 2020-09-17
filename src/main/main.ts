import 'reflect-metadata';
import * as isDev from 'electron-is-dev';
import * as path from 'path';
import * as dotenv from 'dotenv';

// TODO: load env from local path when in the production, remove this in the future
if (!isDev) {
  dotenv.config({ path: path.join(__dirname, '../server.env') });
}

import { app, BrowserWindow, ipcMain } from 'electron';
import { Container } from 'typedi';
import { SourceService } from './service/sourceService';

const loadUrl = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../index.html')}`;
const sourceService = Container.get(SourceService);

let mainWindow: BrowserWindow | undefined;
let dialogWindow: BrowserWindow | undefined;
let externalWindow: BrowserWindow | undefined;

async function startApp() {
  await sourceService.initialize();

  // Main window
  mainWindow = new BrowserWindow({
    maximizable: true,
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
    }
  });
  mainWindow.removeMenu();
  mainWindow.loadURL(`${loadUrl}?window=main`);
  mainWindow.on('closed', () => {
    app.exit(0);
  });

  // Dialog window
  dialogWindow = new BrowserWindow({
    modal: true,
    frame: false,
    fullscreenable: false,
    titleBarStyle: 'hidden',
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  dialogWindow.removeMenu();
  dialogWindow.loadURL(`${loadUrl}?window=dialog`);
  dialogWindow.on('close', e => {
    // Prevent the window from actually closing
    e.preventDefault();
  });
}

// Fix windows scale factor
app.commandLine.appendSwitch('high-dpi-support', '1');
app.commandLine.appendSwitch('force-device-scale-factor', '1');

app.on('ready', startApp);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    startApp();
  }
});

// Show renderer log in main
const color = (str: string) => `\x1b[35m${str}\x1b[0m`;
ipcMain.on('logMsg', (event, level, message, ...args) => {
  (console as any)[level](`${color('[renderer]')}${message}`, args);
});

// Dialog
ipcMain.on('showDialog', (event, sessionId, options, defaultValue) => {
  dialogWindow?.webContents.send('showDialog', sessionId, options, defaultValue);
});

ipcMain.on('dialogClosed', (event, sessionId, result) => {
  mainWindow?.webContents.send('dialogClosed', sessionId, result);
});

// Open DevTools
ipcMain.on('openDevTools', () => {
  mainWindow?.webContents.openDevTools();
});

// External window
ipcMain.on('showExternalWindow', () => {
  if (externalWindow) {
    externalWindow.show();
  } else {
    externalWindow = new BrowserWindow({
      width: 960,
      height: 540,
      webPreferences: {
        nodeIntegration: true,
      }
    });
    externalWindow.removeMenu();
    externalWindow.loadURL(`${loadUrl}?window=external`);
    externalWindow.on('close', e => {
      externalWindow = undefined;
    });
  }
});

// Exit
ipcMain.on('exit', () => {
  app.exit(0);
});

const electron = require('electron');
const { app, ipcMain } = electron;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;
let workerWindow;

function startApp() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    }
  });
  mainWindow.loadURL(isDev
    ? 'http://localhost:3000?windowId=main'
    : `file://${path.join(__dirname, 'build/index.html?windowId=main')}`);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);

  mainWindow.maximize();

  // worker window
  workerWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true
    },
  });

  workerWindow.loadURL(isDev
    ? 'http://localhost:3000?windowId=worker'
    : `file://${path.join(__dirname, 'build/index.html?windowId=worker')}`);
  if (isDev) {
    workerWindow.webContents.openDevTools({ mode: 'undocked' });
  }
}

app.allowRendererProcessReuse = false;

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

let dialog;
let closeByConfirmed;
ipcMain.on('showDialog', (event, args) => {
  const { component, ...options } = args;
  dialog = new BrowserWindow({
    modal: true,
    frame: false,
    fullscreenable: false,
    backgroundColor: '#17242D',
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true
    },
    ...options,
  });
  dialog.removeMenu();
  dialog.on('close', () => {
    if (!closeByConfirmed) {
      console.log(`dialogCanceled`);
      mainWindow.webContents.send('dialogCanceled');
    }
    dialog = null;
    closeByConfirmed = false;
  });
  if (isDev) {
    dialog.loadURL(`http://localhost:3000/${component}`);
  } else {
    dialog.loadURL(
      url.format({
        pathname: path.join(__dirname, `build/index.html#${component}`),
        protocol: 'file:',
        slashes: true
      })
    );
  }
});

ipcMain.on('cancelDialog', event => {
  if (dialog) {
    dialog.close();
  }
});

ipcMain.on('confirmDialog', (event, data) => {
  console.log(`dialogConfirmed = ${JSON.stringify(data)}`);
  mainWindow.webContents.send('dialogConfirmed', data);
  if (dialog) {
    closeByConfirmed = true;
    dialog.close();
  }
});

ipcMain.on('worker-request', (event, data) => {
  workerWindow.webContents.send('worker-request', data);
});

ipcMain.on('worker-response', (event, data) => {
  mainWindow.webContents.send('worker-response', data);
});

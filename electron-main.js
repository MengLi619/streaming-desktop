const electron = require('electron');
const { app, ipcMain } = electron;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');
const loadUrl = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, 'build/index.html')}`;

let mainWindow;
let dialogWindow;

function startApp() {
  // Create main window
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    }
  });
  mainWindow.loadURL(`${loadUrl}?window=main`);
  mainWindow.on('closed', () => mainWindow = null);
  mainWindow.maximize();

  // Create dialog window
  dialogWindow = new BrowserWindow({
    modal: true,
    frame: false,
    fullscreenable: false,
    titleBarStyle: 'hidden',
    show: false,
    webPreferences: {
      nodeIntegration: true
    },
  });
  dialogWindow.removeMenu();
  dialogWindow.loadURL(`${loadUrl}?window=dialog`);
  // The dialog window is never closed, it just hides in the
  // background until it is needed.
  dialogWindow.on('close', e => {
      // Prevent the window from actually closing
      e.preventDefault();
  });
}

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
const color = (str) => `\x1b[35m${str}\x1b[0m`;
ipcMain.on('logMsg', (event, level, message, ...args) => {
  console[level](`${color('[renderer]')}${message}`, args);
});

// Dialog
ipcMain.on('showDialog', (event, sessionId, options) => {
  dialogWindow.webContents.send('showDialog', sessionId, options);
});

ipcMain.on('dialogClosed', (event, sessionId, result) => {
  mainWindow.webContents.send('dialogClosed', sessionId, result);
});

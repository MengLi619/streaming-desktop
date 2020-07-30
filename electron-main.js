const { app, BrowserWindow, ipcMain,  } = require('electron');
const path = require('path');
const url= require('url');

let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL(`http://localhost:3000`);
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true
      })
    );
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);
app.allowRendererProcessReuse = true;

ipcMain.on('showDialog', (event, args) => {
  const { component, ...options } = args;
  const dialog = new BrowserWindow({
    show: false,
    frame: false,
    modal: true,
    parent: mainWindow,
    fullscreenable: false,
    titleBarStyle: 'hidden',
    backgroundColor: '#17242D',
    webPreferences: { nodeIntegration: true },
    ...options,
  });
  if (process.env.NODE_ENV === 'development') {
    dialog.loadURL(`http://localhost:3000/${component}`);
  } else {
    dialog.loadURL(
      url.format({
        pathname: path.join(__dirname, `../index.html#${component}`),
        protocol: 'file:',
        slashes: true
      })
    );
  }
});

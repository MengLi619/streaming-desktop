import "reflect-metadata";
import '@fortawesome/fontawesome-free/css/all.css';
import './index.scss';
import 'react-dropdown/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ipcRenderer } from 'electron';
import * as serviceWorker from './serviceWorker';
import { App } from './App';

// wrap control log
['log', 'debug', 'info', 'warn', 'errpr'].forEach(level => {
  const origin = (console as any)[level];
  (console as any)[level] = (message: string, ...args: any) => {
    origin(message, ...args);
    ipcRenderer.send('logMsg', level, message, ...args);
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

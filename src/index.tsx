import '@fortawesome/fontawesome-free/css/all.css';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as uuid from 'uuid';
import * as obs from './obs-api';
import * as serviceWorker from './serviceWorker';
import { Main } from './component/screens/Main/Main';
import { LayoutEditor } from './component/screens/LayoutEditor/LayoutEditor';
import { AddSourceDialog } from './component/screens/AddSceneDialog/AddSourceDialog';
import { Studio } from './component/screens/Studio/Studio';
import { LayoutProvider } from './component/context/LayoutProvider';
import { ScenesProvider } from './component/context/ScenesProvider';
import path from "path";
import electron from "electron";
import { isWorkerWindow } from './util/utils';
import { SettingsDialog } from './component/screens/SettingsDialog/SettingsDialog';

document.addEventListener('DOMContentLoaded', async () => {
  if (isWorkerWindow()) {
    // This is used for debugging
    (window as any).obs = obs;

    // Host a new OBS server instance
    obs.IPC.host(uuid.v4());
    obs.NodeObs.SetWorkingDirectory(
      path.join(
        electron.remote.app.getAppPath().replace('app.asar', 'app.asar.unpacked'),
        'node_modules',
        'obs-studio-node',
      ),
    );

    // Initialize OBS API
    const apiResult = obs.NodeObs.OBS_API_initAPI(
      'en-US',
      electron.remote.app.getPath('userData'),
      electron.remote.process.env.APP_VERSION || '1.0.0',
    );

    if (apiResult !== 0) {
      console.log(`Failed to initialize obs API: ${JSON.stringify(apiResult)}`);

      obs.NodeObs.StopCrashHandler();
      obs.IPC.disconnect();

      electron.ipcRenderer.send('shutdownComplete');
      return;
    }
  }
});

ReactDOM.render(
  <LayoutProvider>
    <ScenesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/AddSceneDialog' component={AddSourceDialog} />
          <Route exact path='/SettingsDialog' component={SettingsDialog} />
          <Route path='*'>
            <Main>
              <Switch>
                <Route exact path='/' component={Studio} />
                <Route exact path='/layoutEditor' component={LayoutEditor} />
              </Switch>
            </Main>
          </Route>
        </Switch>
      </BrowserRouter>
    </ScenesProvider>
  </LayoutProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

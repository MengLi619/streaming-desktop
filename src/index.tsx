import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { Main } from './component/screens/main/main';
import { LayoutEditor } from './component/screens/layoutEditor/layoutEditor';
import { Studio } from './component/screens/studio/studio';
import { LayoutProvider } from './component/shared/layoutProvider';

ReactDOM.render(
  <React.StrictMode>
    <LayoutProvider>
      <BrowserRouter>
        <Main>
          <Switch>
            <Route exact path='/' component={Studio} />
            <Route exact path='/layoutEditor' component={LayoutEditor} />
          </Switch>
        </Main>
      </BrowserRouter>
    </LayoutProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

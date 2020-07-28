import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { Main } from './component/screen/main/main';
import { Layout } from './component/screen/layout/layout';
import { Studio } from './component/screen/studio/studio';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main>
        <Switch>
          <Route exact path='/' component={Studio} />
          <Route exact path='/layout' component={Layout} />
        </Switch>
      </Main>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

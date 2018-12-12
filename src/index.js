import React from 'react';
import ReactDOM from 'react-dom';
import storeConfig from './store/storeConfig';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import Main from './containers/Main';

const store = storeConfig();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/:repoName" component={Main} />
          <Route path="/" exact component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
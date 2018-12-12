import React from 'react';
import ReactDOM from 'react-dom';
import storeConfig from './store/storeConfig';
import { Provider } from 'react-redux';

import Main from './containers/Main';

const store = storeConfig();

ReactDOM.render(
  <Provider store={store}>
    <Main/> 
  </Provider>,
  document.querySelector('#root')
);
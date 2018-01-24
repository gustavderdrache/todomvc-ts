import * as React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './components/App';
import {configureStore} from './state/store';

render(
  <HashRouter>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);
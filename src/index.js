import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import reducer from './reducer';

import 'semantic-ui-css/semantic.min.css';

const store = createStore(reducer);
// createStore arguments, 1 is required which is the reducer, 
// the next are optional for additional store configurations

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

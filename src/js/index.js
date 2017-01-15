import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/main.scss';
import 'font-awesome/css/font-awesome.css'
import configureStore from './store/configureStore';
import appInit from './utils/appInit';

let store = configureStore();
appInit(store);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);

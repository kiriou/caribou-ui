import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducers from './core/reducers';
import routes from './core/routes';
import rootSaga from './core/sagas';

import './style.css';

/*eslint-disable */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const sagaMiddleware = createSagaMiddleWare();
const middlewares = [sagaMiddleware, routerMiddleware(browserHistory)];
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);
const history = syncHistoryWithStore(browserHistory, store);
history.push('/home');

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history} routes={routes} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { configureStore, history } from '../store';
import { Routes } from './root-router';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={Routes} />
    </ConnectedRouter>
  </Provider>
);

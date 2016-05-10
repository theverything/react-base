import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';

import 'normalize.css';
import './scss/main.scss';

export default class Root extends Component {
   render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

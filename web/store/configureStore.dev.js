import { applyMiddleware, createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../utils/DevTools';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

const router = routerMiddleware(browserHistory);
const finalCreateStore = compose(
  applyMiddleware(thunk, router, promise),
  DevTools.instrument(),
  persistState(getDebugSessionKey())
)(createStore);

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers');
        store.replaceReducer(nextReducer);
    });
  };

  return store;
}

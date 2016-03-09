import { applyMiddleware, createStore, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

const router = routerMiddleware(browserHistory);
const finalCreateStore = compose(
  applyMiddleware(thunk, router, promise),
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}

import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
  Store,
} from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import StoreInterface from '../types/store.interface';
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<StoreInterface, any> = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
  Store,
} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export interface StoreInterface  {
  loading: boolean,
  currentPokemon: any,
  currentAbility: any,
  pokemonList: any[],
}
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

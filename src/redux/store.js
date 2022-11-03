import { composeWithDevTools } from '@redux-devtools/extension';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/user';
import walletReducer from './reducers/wallet';

const store = createStore(
  combineReducers({
    user: userReducer,
    wallet: walletReducer }),
  composeWithDevTools(applyMiddleware(thunk)),
);

if (window.Cypress) {
  window.store = store;
}

export default store;

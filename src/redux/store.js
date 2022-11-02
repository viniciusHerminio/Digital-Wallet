import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import userReducer from './reducers/user';
import walletReducer from './reducers/wallet';

const store = createStore(
  combineReducers({
    user: userReducer,
    wallet: walletReducer }),
  composeWithDevTools(),
);

if (window.Cypress) {
  window.store = store;
}

export default store;

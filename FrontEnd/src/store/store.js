// Utility functions and helpers

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './reducers/dataReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

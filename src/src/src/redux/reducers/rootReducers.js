import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import servicesReducer from './servicesReducer';
import testsReducer from './testsReducer';
import pathologyReducer from './pathologyReducer';
import invoiceOrderReducer from './invoiceOrderReducer';
import othersReducer from './othersReducer';
import alertReducer from './alertReducer';


const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({
  servicesReducer,testsReducer,pathologyReducer,invoiceOrderReducer,
  othersReducer,alertReducer
});

export { rootPersistConfig, rootReducer };

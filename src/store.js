import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, createStore, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, reducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = () => {
  return composeEnhancers(applyMiddleware(thunk));
};
const store = createStore(persistedReducer, {}, middleware());
const persistor = persistStore(store);

export default () => {
  return {
    store,
    persistor,
  };
};

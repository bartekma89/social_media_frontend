import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { ACTIONS } from '../actions/type';
import reducerFactory from './generic/reducerFactory';

const persistConfig = {
  key: 'profile',
  storage
};

const profileReducer = reducerFactory({
  name: ACTIONS.GET_PROFILE
});

export default persistReducer(persistConfig, profileReducer);

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { ACTIONS } from '../actions/type';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null
};

const persistConfig = {
  key: 'auth',
  storage,
  blacklist: ['user']
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case ACTIONS.REGISTER_SUCCESS:
    case ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        loading: false
      };
    case ACTIONS.REGISTER_FAIL:
    case ACTIONS.LOGIN_FAIL:
    case ACTIONS.AUTH_ERROR:
    case ACTIONS.LOGOUT_AUTH:
    case ACTIONS.ACCOUNT_DELETE:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, authReducer);

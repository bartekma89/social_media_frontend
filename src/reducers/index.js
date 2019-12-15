import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
import profileReducer from './profile.reducer';
import alertReducer from './alert.reducer';
import profilesReducer from './profiles.reducer';
import githubReposReducer from './repos.reducer';

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  profiles: profilesReducer,
  repos: githubReposReducer,
  alert: alertReducer
});

import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import { profileReducer } from "./profile.reducer";
import alertReducer from "./alert.reducer";

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  alert: alertReducer
});

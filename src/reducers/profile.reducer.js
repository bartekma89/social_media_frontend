import { ACTIONS } from "../actions/type";

import reducerFactory from "./generic/reducerFactory";

export const profileReducer = reducerFactory({
  name: ACTIONS.GET_PROFILE
});

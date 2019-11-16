import { filter } from "lodash";

import { ACTIONS } from "../actions/type";

const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.SET_ALERT:
      return [...state, payload];
    case ACTIONS.REMOVE_ALERT:
      return filter(state, alert => alert.id !== payload.id);
    default:
      return state;
  }
};

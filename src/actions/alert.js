import uuid from "uuid";
import { delay } from "lodash";

import { ACTIONS } from "./type";

export const setAlert = (msg, alertType, timeout = 10000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: ACTIONS.SET_ALERT,
    payload: {
      msg,
      alertType,
      id
    }
  });

  delay(() => {
    dispatch({
      type: ACTIONS.REMOVE_ALERT,
      payload: {
        id
      }
    });
  }, timeout);
};

import { get } from "lodash";
import axios from "axios";

const actionCreatorFactory = (
  nameAction,
  { url, method = "get", data = null }
) => async dispatch => {
  await dispatch({
    type: `${nameAction}_PENDING`
  });

  try {
    const response = await axios({ method, url, data });
    const payload = get(response, "data");

    await dispatch({
      type: `${nameAction}_FULFILLED`,
      payload
    });

    return payload;
  } catch (e) {
    const errors = get(e, "response.data");
    dispatch({
      type: `${nameAction}_REJECTED`,
      payload: errors
    });
  }
};

export default actionCreatorFactory;

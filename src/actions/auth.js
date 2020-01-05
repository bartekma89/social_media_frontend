import axios from 'axios';
import { get } from 'lodash';

import { ACTIONS } from './type';
import { setAuthToken } from '../helpers';

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const response = await axios('http://localhost:8080/auth');
    const payload = get(response, 'data');

    dispatch({
      type: ACTIONS.LOAD_USER,
      payload
    });
  } catch (e) {
    localStorage.removeItem('token');
    dispatch({
      type: ACTIONS.AUTH_ERROR
    });
  }
};

export const signup = (formProps, actionsForm, cb) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8080/join', formProps);
    const payload = get(response.data, 'user');
    const token = get(payload, 'token');

    localStorage.setItem('token', token);

    await dispatch({
      type: ACTIONS.REGISTER_SUCCESS,
      payload
    });

    await dispatch(loadUser());

    actionsForm.setSubmitting(false);
    actionsForm.resetForm();
    cb();
  } catch (e) {
    const errors = get(e, 'response.data');
    actionsForm.setSubmitting(false);
    actionsForm.setErrors(errors);

    localStorage.removeItem('token');
    await dispatch({
      type: ACTIONS.REGISTER_FAIL
    });
  }
};

export const signin = (formProps, actionsForm, cb) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8080/login', formProps);
    const payload = get(response.data, 'user');
    const token = get(payload, 'token');

    localStorage.setItem('token', token);

    await dispatch({
      type: ACTIONS.LOGIN_SUCCESS,
      payload
    });

    await dispatch(loadUser());

    actionsForm.setSubmitting(false);
    actionsForm.resetForm();
    cb();
  } catch (e) {
    const errors = get(e, 'response.data');
    actionsForm.setSubmitting(false);
    actionsForm.setErrors({ ...errors, password: ' ' });

    localStorage.removeItem('token');
    await dispatch({
      type: ACTIONS.LOGIN_FAIL
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: `${ACTIONS.GET_PROFILE}_RESET`
  });
  dispatch({
    type: ACTIONS.LOGOUT_AUTH
  });
};

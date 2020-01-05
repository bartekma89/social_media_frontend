import actionCreatorFactory from './generic/actionCreatorFactory';
import { ACTIONS } from './type';
import { setAlert } from '../actions/alert';

export const getCurrentProfile = () => async (dispatch) => {
  await dispatch(
    actionCreatorFactory(ACTIONS.GET_PROFILE, {
      url: 'http://localhost:8080/profile/me'
    })
  );
};
export const getAllProfiles = () => async (dispatch) => {
  dispatch({
    type: `${ACTIONS.GET_PROFILE}_RESET`
  });
  await dispatch(
    actionCreatorFactory(ACTIONS.GET_ALL_PROFILES, {
      url: 'http://localhost:8080/profile/all'
    })
  );
};

export const getProfileById = (userId) => async (dispatch) => {
  await dispatch(
    actionCreatorFactory(ACTIONS.GET_PROFILE, {
      url: `http://localhost:8080/profile/user/${userId}`
    })
  );
};

export const fetchGithubRepos = (username) => async (dispatch) => {
  await dispatch(
    actionCreatorFactory(ACTIONS.GET_GITHUB_REPOS, {
      url: `http://localhost:8080/profile/github/${username}`
    })
  );
};

export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  const res = await dispatch(
    actionCreatorFactory(ACTIONS.CREATE_PROFILE, {
      url: 'http://localhost:8080/profile',
      method: 'post',
      data: formData
    })
  );

  await dispatch({
    type: `${ACTIONS.GET_PROFILE}_FULFILLED`,
    payload: res
  });

  await dispatch(
    setAlert(edit ? 'Profile updated' : 'Profile created', 'success')
  );

  history.push('/dashboard');

  // if (edit) {
  //   history.push('/dashboard');
  // }
};

export const addEducation = (formData, history) => async (dispatch) => {
  const res = await dispatch(
    actionCreatorFactory(ACTIONS.UPDATE_PROFILE, {
      url: 'http://localhost:8080/profile/education',
      method: 'post',
      data: formData
    })
  );

  dispatch({
    type: `${ACTIONS.GET_PROFILE}_FULFILLED`,
    payload: res
  });

  dispatch(setAlert('Education Added', 'success'));
  history.push('/');
};

export const addExperience = (formData, history) => async (dispatch) => {
  const res = await dispatch(
    actionCreatorFactory(ACTIONS.UPDATE_PROFILE, {
      url: 'http://localhost:8080/profile/experience',
      method: 'post',
      data: formData
    })
  );

  dispatch({
    type: `${ACTIONS.GET_PROFILE}_FULFILLED`,
    payload: res
  });

  dispatch(setAlert('Experience Added', 'success'));
  history.push('/');
};

export const deleteEducation = (id) => async (dispatch) => {
  const res = await dispatch(
    actionCreatorFactory(ACTIONS.UPDATE_PROFILE, {
      url: `http://localhost:8080/profile/education/${id}`,
      method: 'delete'
    })
  );

  dispatch({
    type: `${ACTIONS.GET_PROFILE}_FULFILLED`,
    payload: res
  });

  dispatch(setAlert('Education Removed', 'success'));
};

export const deleteExperience = (id) => async (dispatch) => {
  const res = await dispatch(
    actionCreatorFactory(ACTIONS.UPDATE_PROFILE, {
      url: `http://localhost:8080/profile/experience/${id}`,
      method: 'delete'
    })
  );

  dispatch({
    type: `${ACTIONS.GET_PROFILE}_FULFILLED`,
    payload: res
  });

  dispatch(setAlert('Experience Removed', 'success'));
};

export const deleteAccount = () => async (dispatch) => {
  localStorage.removeItem('token');

  await dispatch(
    actionCreatorFactory(ACTIONS.CLEAR_PROFILE, {
      url: 'http://localhost:8080/profile',
      method: 'delete'
    })
  );

  dispatch({ type: `${ACTIONS.GET_PROFILE}_RESET` });
  dispatch({
    type: ACTIONS.ACCOUNT_DELETE
  });
};

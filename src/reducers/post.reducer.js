import { ACTIONS } from '../actions/type';

const initialState = {
  posts: [],
  post: null,
  fetching: true,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.GET_POSTS:
      return { ...state, posts: payload, fetching: false, error: null };
    case ACTIONS.POST_ERROR:
      return { ...state, fetching: false, error: payload };
    default:
      return state;
  }
};

import initialState from './initialState';

const reducerFactory = ({ name }) => {
  return (state = initialState, action) => {
    switch (action.type) {
      case `${name}_PENDING`:
        return { ...state, intact: false, fetching: true };
      case `${name}_FULFILLED`:
        return {
          ...state,
          data: action.payload,
          fetching: false,
          error: null
        };
      case `${name}_REJECTED`:
        return { ...state, error: action.payload, fetching: false, data: null };
      case `${name}_RESET`:
        return { ...initialState };
      default:
        return state;
    }
  };
};

export default reducerFactory;

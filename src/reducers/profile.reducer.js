import { ACTIONS } from '../actions/type';
import reducerFactory from './generic/reducerFactory';

const profileReducer = reducerFactory({
  name: ACTIONS.GET_PROFILE
});

export default profileReducer;

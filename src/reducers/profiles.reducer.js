import { ACTIONS } from '../actions/type';
import reducerFactory from './generic/reducerFactory';

const profilesReducer = reducerFactory({
  name: ACTIONS.GET_ALL_PROFILES
});

export default profilesReducer;

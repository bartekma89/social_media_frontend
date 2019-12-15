import { ACTIONS } from '../actions/type';
import reducerFactory from './generic/reducerFactory';

const githubReposReducer = reducerFactory({
  name: ACTIONS.GET_GITHUB_REPOS
});

export default githubReposReducer;

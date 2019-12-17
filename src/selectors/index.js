import { get } from 'lodash';

export const getAuth = (state) => get(state, 'auth');

export const getAuthStatus = (state) => get(state, 'auth.isAuthenticated');

export const getAuthUser = (state) => get(state, 'auth.user');

export const getAuthLoading = (state) => get(state, 'auth.loading');

export const getProfile = (state) => get(state, 'profile');

export const getProfileError = (state) => get(state, 'profile.error');

export const getAlert = (state) => get(state, 'alert');

export const getProfiles = (state) => get(state, 'profiles');

export const getGithubRepos = (state) => get(state, 'repos');

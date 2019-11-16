import { get } from "lodash";

export const getAuthStatus = state => get(state, "auth.isAuthenticated");

export const getAuthUser = state => get(state, "auth.user");

export const getAuthLoading = state => get(state, "auth.loading");

// Profile

export const getProfile = state => get(state, "profile");

export const getProfileError = state => get(state, "profile.error");

// Alert

export const getAlert = state => get(state, "alert");

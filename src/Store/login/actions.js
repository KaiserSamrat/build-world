import {
  LOGIN_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  SOCIAL_LOGIN,
} from './actionTypes';

export const loginUser = (user, history) => {
  return {
    type: LOGIN_USER,
    payload: { user, history },
  };
};

export const loginSuccess = (username, token, id, email, role) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { username, token, id, email, role },
  };
};

export const logoutUser = (history) => {
  return {
    type: LOGOUT_USER,
    payload: { history },
  };
};

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  };
};

export const loginUserError = (data) => ({
  type: LOGIN_USER_ERROR,
  payload: { data },
});

export const socialLogin = (data, history, url) => {
  return {
    type: SOCIAL_LOGIN,
    payload: { data, history, url },
  };
};

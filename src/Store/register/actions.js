import {
  REGISTER_USER,
  REGISTER_USER_FAILED,
  REGISTER_USER_SUCCESSFUL,
} from './actionTypes';

export const registerUser = (user, history) => {
  return {
    type: REGISTER_USER,
    payload: { user, history },
  };
};

export const registerUserSuccessful = (message) => {
  return {
    type: REGISTER_USER_SUCCESSFUL,
    payload: { message },
  };
};

export const registerUserFailed = (message) => {
  return {
    type: REGISTER_USER_FAILED,
    payload: { message },
  };
};

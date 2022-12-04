import {
  REGISTER_USER,
  REGISTER_USER_FAILED,
  REGISTER_USER_SUCCESSFUL,
} from './actionTypes';

const initialState = {
  registrationError: null,
  message: null,
  loading: false,
};

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      state = {
        ...state,
        loading: true,
        registrationError: null,
      };
      break;
    case REGISTER_USER_SUCCESSFUL:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        registrationError: null,
      };
      break;
    case REGISTER_USER_FAILED:
      state = {
        ...state,
        loading: false,
        registrationError: action.payload.message,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default RegisterReducer;

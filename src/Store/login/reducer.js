import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import {
  LOGIN_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
} from './actionTypes';

const initialState = {
  loading: false,
  isSocialLogin: false,
  id: '',
  username: '',
  token: '',
  email: '',
  userrole: '',
  error: '',
  data: {},
};

const loginReducer = (state = initialState, action) => {
  // console.log(`login ~ action`, action.payload);
  switch (action.type) {
    case LOGIN_USER:
      state = {
        ...state,
        loading: true,
        error: '',
      };
      break;
    case LOGIN_SUCCESS:
      state = {
        ...state,
        username: action.payload.name,
        token: action.payload.token,     
        id: action.payload.id,
        email: action.payload.email,
        role: action.payload.role,
        loading: false,
        // error: '',
        // data: action.payload.data,
      };
      break;
    case LOGIN_USER_ERROR:
      state = {
        ...state,
        username: '',
        token: '',
        id:'',
        email: '',
       
        role: '',
        loading: false,
        
      };
      break;
    case LOGOUT_USER:
      state = {
        ...state,
        id: '',
        username: '',
        token: '',
        email: '',
        userrole: '',
        data: {},
      };
      break;
    case LOGOUT_USER_SUCCESS:
      state = { ...state };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

const persistConfig = {
  keyPrefix: 'exmPro-',
  key: 'login',
  storage,
};

export default persistReducer(persistConfig, loginReducer);

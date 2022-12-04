import { combineReducers } from "redux";

import RegisterReducer from './register/reducer'
import loginReducer from './login/reducer'
import ProductReducer from './Product/reducer'
const rootReducer = combineReducers({
  RegisterReducer,
  loginReducer,
  ProductReducer

});

export default rootReducer;

import { combineReducers } from "redux";

import RegisterReducer from './register/reducer'
import loginReducer from './login/reducer'
import ProductReducer from './Product/reducer'
import CardReducer from './cart/reducers'
import OrderReducer from './Order/reducers'
const rootReducer = combineReducers({
  RegisterReducer,
  loginReducer,
  ProductReducer,
  CardReducer,
  OrderReducer

});

export default rootReducer;

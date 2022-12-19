import { all, fork } from "redux-saga/effects";
import RegisterSaga from "./register/saga";
import authSaga from "./login/saga";
import ProductSaga from "./Product/saga";
import addCardSaga from './cart/saga'
import OrderSaga from './Order/saga'
export default function* rootSaga() {
  yield all([
    fork(RegisterSaga),
    fork(authSaga),
    fork(ProductSaga),
    fork(addCardSaga),
    fork(OrderSaga),
  ]);
}

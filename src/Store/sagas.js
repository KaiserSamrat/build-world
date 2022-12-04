import { all, fork } from "redux-saga/effects";
import RegisterSaga from "./register/saga";
import authSaga from "./login/saga";
import ProductSaga from "./Product/saga";
export default function* rootSaga() {
  yield all([
    fork(RegisterSaga),
    fork(authSaga),
    fork(ProductSaga),
  ]);
}

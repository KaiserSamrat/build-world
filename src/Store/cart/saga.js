import { put, takeEvery } from "redux-saga/effects";
import { addCartSuccess } from "./actions";
import { ADD_CART } from "./actionTypes";

function* onAddCard({ payload: { data } }) {
  // console.log(`file: saga.js ~ line 8 ~ function*onAddCard ~ data`, data);
  yield put(addCartSuccess(data));
}

function* addCardSaga() {
  yield takeEvery(ADD_CART, onAddCard);
  // yield takeEvery(GET_SINGLE_PACKAGE, fetchSinglePackage);
}

export default addCardSaga;

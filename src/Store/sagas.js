import { all, fork } from "redux-saga/effects";
import ProfileSaga from "./todos/saga";


export default function* rootSaga() {
  yield all([
    fork(ProfileSaga),
  ]);
}

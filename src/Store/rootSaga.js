import { all, fork } from 'redux-saga/effects';
import { demoSaga } from './demo/demoSaga';

export default function* rootSaga() {
  yield all([
    fork(demoSaga),
    //
  ]);
}

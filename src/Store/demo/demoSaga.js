import { call, put, takeEvery } from 'redux-saga/effects';
import { getData } from '../../helpers/backend_helper';
import { loadJson, loadJsonSuccess } from './demoSlice';

function* onGetJson() {
  try {
    const url = '/users';
    const response = yield call(getData, url);
    yield put(loadJsonSuccess(response));
  } catch (err) {
    console.log('errr');
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* demoSaga() {
  yield takeEvery(loadJson.type, onGetJson);
}

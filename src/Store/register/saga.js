import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { postData } from '../../helpers/backend_helper';

import { registerUserFailed, registerUserSuccessful } from './actions';
import { REGISTER_USER } from './actionTypes';

function* workerSignUp({
  payload: { user, history },
}) {
  console.log('user', user);
  // console.log(`line 72 ~ values`, values);
  try {
    console.log('user', user);
    const url = `/users/signup`;
    const response = yield call(postData, url, user);
    yield put(registerUserSuccessful(response));
   
  } catch (error) {
    const message = error?.response?.data?.message || `Set time fail`;
    yield put(registerUserFailed(message));
  }
}


function* RegisterSaga() {
 
  yield takeEvery(REGISTER_USER, workerSignUp);

}

export default RegisterSaga;

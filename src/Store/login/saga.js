import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { postData } from '../../helpers/backend_helper';
import { loginSuccess, loginUserError } from './actions';
// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from './actionTypes';

// function* onLoginUser({ payload: { user, history } }) {
//   try {
//     const url = `/login`;
//     const response = yield call(postNonAuth, url, user);
//     // console.log(`response`, response);
//     const {
//       UserLogin: {
//         data: { _id, fullName, role, email },
//       },
//       token,
//     } = response;
//     yield put(
//       loginSuccess(fullName, token, _id, email, role, response?.UserLogin)
//     );

//     if (!!history?.location?.state) {
//       const { from } = history?.location?.state;
//       history.push(from.pathname);
//     } else {
//       history.push('/dashboard');
//     }
//   } catch (err) {
//     const message = err?.response?.data?.message || 'Registration Failed!!';
//     yield put(loginUserError(message));
//   }
// }
function* onLoginUser({
  payload: { user, history },
}) {
  console.log('user', user);
  // console.log(`line 72 ~ values`, values);
  try {
    console.log('user', user);
    const url = `users/login`;
    const response = yield call(postData, url, user);
    console.log('response', response);
    yield put(loginSuccess(response?.user?.name, response?.token,response?.user?._id, response?.user?.email, response?.user?.role ));
   
  } catch (error) {
    const message = error?.response?.data?.message || `Set time fail`;
    yield put(loginUserError(message));
  }
}
function* logoutUser({ payload: { history } }) {
  try {
    yield history.push('/');
  } catch (error) {
    console.log('error data', error);
  }
}


function* authSaga() {
  yield takeEvery(LOGIN_USER, onLoginUser);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;

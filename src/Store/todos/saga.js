import { call, put, takeEvery } from "redux-saga/effects";
import { getData } from "../../helpers/api_helper";
import { ADDED } from "./actionTypes";
function* onGetProfile({ payload: { token } }) {
    try {
      const url = "/get-me";
      const response = yield call(getData, url, token);
      
      // toaster('success')
    } catch (err) {
      const message = err?.response?.data?.message;
    
    }
  }

  function* ProfileSaga() {
   
    yield takeEvery(ADDED, onGetProfile);
    
  }
  
  export default ProfileSaga;
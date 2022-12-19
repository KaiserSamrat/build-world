import { call, put, takeEvery } from "redux-saga/effects";
import { getData, patchData, postData } from "../../helpers/backend_helper";
import { toaster } from "../../helpers/custom/Toast";
// import { storeOwnPackageData } from "../OwnPackage/actions";
import {
  addPackageOrderFail,
  addPackageOrderSuccess,
  getShopOrderFail,
  getShopOrderSuccess,
  getUserOrderFail,
  getUserOrderSuccess,
} from "./actions";
//from pacakge type
import {
  ADD_PACKAGE_ORDER,
  GET_SHOP_ORDER,
  GET_USER_ORDER
} from "./actionTypes";

function* AddPackageOrder({
  payload: { data, history, authtoken, cuponName, paymentSystem },
}) {
  try {
    const url = `/order-router`;
    const response = yield call(postData, url, data, authtoken);
console.log('HEHEHE', response);
  
    yield put(addPackageOrderSuccess(response));
    console.log('paymentSystem', paymentSystem);
    if(paymentSystem==="COD"){
      history.push("/purchase")
    }
    else{
      window.location.href = response?.data;
    }
    
    toaster("success", "Order added successfully!");
    // history.push("/purchase")
  } catch (error) {
    console.log(` error`, error);
    const message = error.response?.data?.message;
    yield put(addPackageOrderFail(message));
    toaster("error", message);
  }
}

function* onGetUserOrder({ payload: { authtoken, id } }) {
  try {
    const url = `order-router?pageNo=1&limit=100&userid=${id}&orderstatus="pending"`;
    const response = yield call(getData, url, authtoken);
    yield put(getUserOrderSuccess(response));
  } catch (error) {
    const message = error.response?.data?.message || "get category failed";
    yield put(getUserOrderFail(message));
    toaster("error", message);
  }
}
function* onGetShopOrder({ payload: { authtoken, id } }) {
  try {
    const url = `order-router?shopId=${id}&buyerId`;
    const response = yield call(getData, url, authtoken);
    yield put(getShopOrderSuccess(response));
  } catch (error) {
    const message = error.response?.data?.message || "get category failed";
    yield put(getShopOrderFail(message));
    toaster("error", message);
  }
}

function* OrderSaga() {
  yield takeEvery(ADD_PACKAGE_ORDER, AddPackageOrder);
  yield takeEvery(GET_USER_ORDER, onGetUserOrder);
  yield takeEvery(GET_SHOP_ORDER, onGetShopOrder);

}

export default OrderSaga;

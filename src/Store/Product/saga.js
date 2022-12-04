import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getData, postData } from '../../helpers/backend_helper';
import { toaster } from '../../helpers/custom/Toaster';

import { createCategoryFailed, createCategorySuccessful, createProductFailed, createProductSuccessful, getCategoryListFail, getCategoryListSuccess, getShopListFail, getShopListSuccess, registerUserFailed, registerUserSuccessful } from './actions';
import { GET_CATEGORY, GET_SHOP, POST_CATEGORY, POST_PRODUCT, POST_SHOP, REGISTER_USER } from './actionTypes';

function* onAddCategory({
  payload: { data, history, token },
}) {

  // console.log(`line 72 ~ values`, values);
  try {
    
    const url = `/category-router`;
    const response = yield call(postData, url, data, token)
    yield put(createCategorySuccessful(response));
    toaster("success", "Category added succesfully");
   history.push("/category")
  } catch (error) {
    const message = error?.response?.data?.message || `Set category fail`;
    yield put(createCategoryFailed(message));
  }
}
function* onGetCategory({ payload: { token } }) {
  try {
    const url = "/category-router?pageNo=1&limit=10";
    const response = yield call(getData, url, token);
    yield put(getCategoryListSuccess(response));
  } catch (error) {
    const message = error.response?.data?.message || "get category failed";
    yield put(getCategoryListFail(message));
    toaster("error", message);
  }
}

function* onAddShop({
  payload: { data, history, token },
}) {

  // console.log(`line 72 ~ values`, values);
  try {
    
    const url = `/shop-router`;
    const response = yield call(postData, url, data, token)
    yield put(createCategorySuccessful(response));
    toaster("success", "shop added successfully");
   history.push("/shop")
  } catch (error) {
    const message = error?.response?.data?.message || `Set shop fail`;
    yield put(createCategoryFailed(message));
  }
}
function* onGetShop({ payload: { token } }) {
  try {
    const url = "/category-router?pageNo=1&limit=10";
    const response = yield call(getData, url, token);
    yield put(getShopListSuccess(response));
  } catch (error) {
    const message = error.response?.data?.message || "get category failed";
    yield put(getShopListFail(message));
    toaster("error", message);
  }
}
function* onAddProduct({
  payload: { data, history, token },
}) {

  // console.log(`line 72 ~ values`, values);
  try {
    
    const url = `/product`;
    const response = yield call(postData, url, data, token)
    yield put(createProductSuccessful(response));
    toaster("success", "product added successfully");
   history.push("/product")
  } catch (error) {
    const message = error?.response?.data?.message || `Set shop fail`;
    yield put(createProductFailed(message));
  }
}
function* ProductSaga() {
 
  yield takeEvery(POST_CATEGORY, onAddCategory);
  yield takeEvery(GET_CATEGORY, onGetCategory);
  yield takeEvery(POST_SHOP, onAddShop);
  yield takeEvery(POST_PRODUCT, onAddProduct);
  yield takeEvery(GET_SHOP, onGetShop);

}

export default ProductSaga;

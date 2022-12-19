import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getData, postData } from '../../helpers/backend_helper';
import { toaster } from '../../helpers/custom/Toaster';

import { createCategoryFailed, createCategorySuccessful, createProductFailed, createProductSuccessful, createServiceSuccessful, getCategoryListFail, getCategoryListSuccess, getProductFail, getProductSuccess, getServiceFail, getServiceSuccess, getShopListFail, getShopListSuccess, getShopProductFail, getShopProductSuccess, registerUserFailed, registerUserSuccessful } from './actions';
import { GET_CATEGORY, GET_EMPLOYEE, GET_PRODUCT, GET_SHOP, GET_SHOP_PRODUCT, POST_CATEGORY, POST_EMPLOYEE, POST_PRODUCT, POST_SHOP, REGISTER_USER } from './actionTypes';

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
    const url = "shop-router?pageNo=1&limit=100";
    const response = yield call(getData, url, token);
    yield put(getShopListSuccess(response));
  } catch (error) {
    const message = error.response?.data?.message || "get category failed";
    yield put(getShopListFail(message));
    toaster("error", message);
  }
}
function* onGetProduct({ payload: { token } }) {
  try {
    const url = `product?pageNo=0&category=&shopid=&limit=0`;
    const response = yield call(getData, url, token);
    yield put(getProductSuccess(response));
  } catch (error) {
    const message = error.response?.data?.message || "get category failed";
    yield put(getProductFail(message));
    toaster("error", message);
  }
}
function* onShopGetProduct({ payload: { token, id } }) {
  try {
    const url = `product?pageNo=0&category=&shopid=${id}&limit=0`;
    const response = yield call(getData, url, token);
    yield put(getShopProductSuccess(response));
  } catch (error) {
    const message = error.response?.data?.message || "get category failed";
    yield put(getShopProductFail(message));
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
function* onAddEmployee({
  payload: { data, history, token },
}) {

  // console.log(`line 72 ~ values`, values);
  try {
    
    const url = `product/service`;
    const response = yield call(postData, url, data, token)
    yield put(createServiceSuccessful(response));
    toaster("success", "product added successfully");
   history.push("/services")
  } catch (error) {
    const message = error?.response?.data?.message || `Set shop fail`;
    yield put(createServiceSuccessful(message));
  }
}
function* onGetService({ payload: { token } }) {
  try {
    const url = `product/service?pageNo=1&limit=10`;
    const response = yield call(getData, url, token);
    yield put(getServiceSuccess(response));
  } catch (error) {
    const message = error.response?.data?.message || "get category failed";
    yield put(getServiceFail(message));
    toaster("error", message);
  }
}
function* ProductSaga() {
 
  yield takeEvery(POST_CATEGORY, onAddCategory);
  yield takeEvery(GET_CATEGORY, onGetCategory);
  yield takeEvery(POST_SHOP, onAddShop);
  yield takeEvery(POST_PRODUCT, onAddProduct);
  yield takeEvery(GET_SHOP, onGetShop);
  yield takeEvery(GET_PRODUCT, onGetProduct);
  yield takeEvery(POST_EMPLOYEE, onAddEmployee);
  yield takeEvery(GET_EMPLOYEE, onGetService);
  yield takeEvery(GET_SHOP_PRODUCT, onShopGetProduct);

}

export default ProductSaga;

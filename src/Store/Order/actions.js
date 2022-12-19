import {

  ADD_PACKAGE_ORDER,
  ADD_PACKAGE_ORDER_FAIL,
  ADD_PACKAGE_ORDER_SUCCESS,

  GET_SHOP_ORDER,

  GET_SHOP_ORDER_FAIL,

  GET_SHOP_ORDER_SUCCESS,

  GET_USER_ORDER,
  GET_USER_ORDER_FAIL,
  GET_USER_ORDER_SUCCESS,
 
} from "./actionTypes.js";

export const addPackageOrder = (data, history, authtoken, cuponName, paymentSystem) => ({
  type: ADD_PACKAGE_ORDER,
  payload: { data, history, authtoken, cuponName, paymentSystem },
});


export const addPackageOrderSuccess = (data) => ({
  type: ADD_PACKAGE_ORDER_SUCCESS,
  payload: data,
});

export const addPackageOrderFail = (error) => ({
  type: ADD_PACKAGE_ORDER_FAIL,
  payload: error,
});
export const getUserOrder = (authtoken, id) => ({
  type: GET_USER_ORDER,
  payload: { authtoken, id },
});

export const getUserOrderSuccess = (data, authtoken) => ({
  type: GET_USER_ORDER_SUCCESS,
  payload: { data, authtoken },
});

export const getUserOrderFail = (error) => ({
  type: GET_USER_ORDER_FAIL,
  payload: error,
});
export const getShopOrder = (authtoken, id) => ({
  type: GET_SHOP_ORDER,
  payload: { authtoken, id },
});

export const getShopOrderSuccess = (data, authtoken) => ({
  type: GET_SHOP_ORDER_SUCCESS,
  payload: { data, authtoken },
});

export const getShopOrderFail = (error) => ({
  type: GET_SHOP_ORDER_FAIL,
  payload: error,
});


import {
  ADD_CART,
  ADD_CART_FAIL,
  ADD_CART_SUCCESS,
  GET_CART,
  GET_CART_FAIL,
  GET_CART_SUCCESS,
  REMOVE_ALL_CART,
  REMOVE_CART,
  STORE_CART,
} from "./actionTypes";

export const addCart = (data) => ({
  type: ADD_CART,
  payload: { data },
});

export const addCartSuccess = (data) => ({
  type: ADD_CART_SUCCESS,
  payload: data,
});

export const removeCart = (data) => ({
  type: REMOVE_CART,
  payload: { data },
});

export const removeAllCart = () => ({
  type: REMOVE_ALL_CART,
});

export const addCartFail = (error) => ({
  type: ADD_CART_FAIL,
  payload: error,
});
export const getCart = (authtoken) => ({
  type: GET_CART,
  payload: { authtoken },
});

export const getCartSuccess = (data, authtoken) => ({
  type: GET_CART_SUCCESS,
  payload: { data, authtoken },
});

export const getCartFail = (error) => ({
  type: GET_CART_FAIL,
  payload: error,
});

export const storeCartData = (name, data) => ({
  type: STORE_CART,
  payload: { name, data },
});

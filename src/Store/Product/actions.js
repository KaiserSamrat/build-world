import { GET_CATEGORY, GET_CATEGORY_FAILED, GET_CATEGORY_SUCCESSFUL, GET_EMPLOYEE, GET_EMPLOYEE_FAILED, GET_EMPLOYEE_SUCCESSFUL, GET_PRODUCT, GET_PRODUCT_FAILED, GET_PRODUCT_SUCCESSFUL, GET_SHOP, GET_SHOP_FAILED, GET_SHOP_SUCCESSFUL, POST_CATEGORY, POST_CATEGORY_FAILED, POST_CATEGORY_SUCCESSFUL, POST_EMPLOYEE, POST_EMPLOYEE_FAILED, POST_EMPLOYEE_SUCCESSFUL, POST_PRODUCT, POST_PRODUCT_FAILED, POST_PRODUCT_SUCCESSFUL, POST_SHOP, POST_SHOP_FAILED, POST_SHOP_SUCCESSFUL } from "./actionTypes";


export const createCategory = (data, history, token) => {
  return {
    type: POST_CATEGORY,
    payload: { data, history, token },
  };
};

export const createCategorySuccessful = (message) => {
  return {
    type: POST_CATEGORY_SUCCESSFUL,
    payload: { message },
  };
};

export const createCategoryFailed = (message) => {
  return {
    type: POST_CATEGORY_FAILED,
    payload: { message },
  };
};

export const getCategoryList = (token) => ({
  type: GET_CATEGORY,
  payload: { token },
});

export const getCategoryListSuccess = (data) => ({
  type: GET_CATEGORY_SUCCESSFUL,
  payload: { data },
});

// charts data
export const getCategoryListFail = (data) => ({
  type: GET_CATEGORY_FAILED,
  payload: { data },
});
export const createShop= (data, history, token) => {
  return {
    type: POST_SHOP,
    payload: { data, history, token },
  };
};

export const createShopSuccessful = (message) => {
  return {
    type: POST_SHOP_SUCCESSFUL,
    payload: { message },
  };
};

export const createShopFailed = (message) => {
  return {
    type: POST_SHOP_FAILED,
    payload: { message },
  };
};

export const createProduct= (data, history, token) => {
  return {
    type: POST_PRODUCT,
    payload: { data, history, token },
  };
};

export const createProductSuccessful = (message) => {
  return {
    type: POST_PRODUCT_SUCCESSFUL,
    payload: { message },
  };
};

export const createProductFailed = (message) => {
  return {
    type: POST_PRODUCT_FAILED,
    payload: { message },
  };
};

export const getShopList = (token) => ({
  type: GET_SHOP,
  payload: { token },
});

export const getShopListSuccess = (data) => ({
  type: GET_SHOP_SUCCESSFUL,
  payload: { data },
});

// charts data
export const getShopListFail = (data) => ({
  type: GET_SHOP_FAILED,
  payload: { data },
});

export const getProduct = (token) => ({
  type: GET_PRODUCT,
  payload: { token },
});

export const getProductSuccess = (data) => ({
  type: GET_PRODUCT_SUCCESSFUL,
  payload: { data },
});

// charts data
export const getProductFail = (data) => ({
  type: GET_PRODUCT_FAILED,
  payload: { data },
});

export const getService = (token) => ({
  type: GET_EMPLOYEE,
  payload: { token },
});

export const getServiceSuccess = (data) => ({
  type: GET_EMPLOYEE_SUCCESSFUL,
  payload: { data },
});

// charts data
export const getServiceFail = (data) => ({
  type: GET_EMPLOYEE_FAILED,
  payload: { data },
});

export const createService= (data, history, token) => {
  return {
    type: POST_EMPLOYEE,
    payload: { data, history, token },
  };
};

export const createServiceSuccessful = (message) => {
  return {
    type: POST_EMPLOYEE_SUCCESSFUL,
    payload: { message },
  };
};

export const createServiceFailed = (message) => {
  return {
    type: POST_EMPLOYEE_FAILED,
    payload: { message },
  };
};
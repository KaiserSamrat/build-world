import {

  ADD_PACKAGE_ORDER,
  ADD_PACKAGE_ORDER_FAIL,
  ADD_PACKAGE_ORDER_SUCCESS,

  GET_SHOP_ORDER_FAIL,

  GET_SHOP_ORDER_SUCCESS,

  GET_USER_ORDER_FAIL,
  GET_USER_ORDER_SUCCESS,
} from "./actionTypes";

const initialState = {
  userOrder: [],
  shopOrder: [],
  ordering: false,
  userOrderLoading: false,
  couponOrdering: false,
  reRender: false,
  shopOrderLoading: false,
  error: "",
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PACKAGE_ORDER:
      return {
        ...state,
        ordering: true,
      };
    case ADD_PACKAGE_ORDER_SUCCESS:
      return {
        ...state,
        ordering: false,
      };
    case ADD_PACKAGE_ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
        ordering: false,
      };
  


    case GET_USER_ORDER_SUCCESS:
      return {
        ...state,
        userOrder: action.payload,
        userOrderLoading: false,
      };
    case GET_USER_ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
        userOrderLoading: true,
      };
      case GET_SHOP_ORDER_SUCCESS:
      return {
        ...state,
        shopOrder: action.payload,
        shopOrderLoading: false,
      };
    case GET_SHOP_ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
        shopOrderLoading: true,
      };

      return {
        ...state,
        error: action.payload,
        couponOrdering: false,
      };
    default:
      return state;
  }
};

export default OrderReducer;

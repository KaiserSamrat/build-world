import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { toaster } from "../../helpers/custom/Toast";
import {
  ADD_CART_FAIL,
  ADD_CART_SUCCESS,
  GET_CART_FAIL,
  GET_CART_SUCCESS,
  REMOVE_ALL_CART,
  REMOVE_CART,
  STORE_CART,
} from "./actionTypes";

const initialState = {
  readingSet: {},
  cart: [],
};

const CardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_SUCCESS:
      const findIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (findIndex === -1) {
        // toaster("success", "1 new item has been added to your cart!");
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      } else {
        toaster("warning", "Package is already added to card!");
        return {
          ...state,
        };
      }

    case REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((data) => data._id !== action.payload.data._id),
      };

    case REMOVE_ALL_CART:
      return {
        ...state,
        cart: [],
      };
    case ADD_CART_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
      };
    case GET_CART_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case STORE_CART:
      return {
        ...state,
        [action.payload.name]: action.payload.data,
      };
    default:
      return state;
  }
};

const persistConfig = {
  keyPrefix: "exmPro-",
  key: "cart",
  storage,
};

export default persistReducer(persistConfig, CardReducer);

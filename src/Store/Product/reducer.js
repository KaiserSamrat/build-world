import { GET_CATEGORY, GET_CATEGORY_FAILED, GET_CATEGORY_SUCCESSFUL, GET_EMPLOYEE, GET_EMPLOYEE_FAILED, GET_EMPLOYEE_SUCCESSFUL, GET_PRODUCT, GET_PRODUCT_FAILED, GET_PRODUCT_SUCCESSFUL, GET_SHOP, GET_SHOP_FAILED, GET_SHOP_PRODUCT, GET_SHOP_PRODUCT_FAILED, GET_SHOP_PRODUCT_SUCCESSFUL, GET_SHOP_SUCCESSFUL, POST_CATEGORY, POST_CATEGORY_FAILED, POST_CATEGORY_SUCCESSFUL, POST_EMPLOYEE, POST_EMPLOYEE_FAILED, POST_EMPLOYEE_SUCCESSFUL, POST_PRODUCT, POST_PRODUCT_FAILED, POST_PRODUCT_SUCCESSFUL, POST_SHOP, POST_SHOP_FAILED, POST_SHOP_SUCCESSFUL } from "./actionTypes";


const initialState = {
  adding: false,
  message: null,
  loading: false,
  categoryList: [],
  shopList: [],
  productList: [],
  shopProduct: [],
  shopListLoading: false,
  categoryListLoading: false,
  productListLoading: false,
  employeeList: [],
  employeeLoading: false, 
  shopProductLoading: false
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_CATEGORY:
      state = {
        ...state,
        adding: true,
       
      };
      break;
    case POST_CATEGORY_SUCCESSFUL:
      state = {
        ...state,
        adding: false,
        message: action.payload.message,
      
      };
      break;
    case POST_CATEGORY_FAILED:
      state = {
        ...state,
        adding: false,
      };
      break;
      case GET_CATEGORY:
        state =  {
          ...state,
          categoryListLoading: true,
        };
        break;
      case GET_CATEGORY_SUCCESSFUL:
        state ={
          ...state,
          categoryListLoading: false,
          categoryList: action.payload.data,
        };
        break;
      case GET_CATEGORY_FAILED:
        state = {
          ...state,
          error: action.payload,
          categoryListLoading: false,
        };
        break
        case POST_SHOP:
          state = {
            ...state,
            adding: true,
           
          };
          break;
        case POST_SHOP_SUCCESSFUL:
          state = {
            ...state,
            adding: false,
            message: action.payload.message,
          
          };
          break;
        case POST_SHOP_FAILED:
          state = {
            ...state,
            adding: false,
          };
          break;
          case POST_PRODUCT:
            state = {
              ...state,
              adding: true,
             
            };
            break;
          case POST_PRODUCT_SUCCESSFUL:
            state = {
              ...state,
              adding: false,
              message: action.payload.message,
            
            };
            break;
          case POST_PRODUCT_FAILED:
            state = {
              ...state,
              adding: false,
            };
            break;
            case GET_SHOP:
              state =  {
                ...state,
                shopListLoading: true,
              };
              break;
            case GET_SHOP_SUCCESSFUL:
              state ={
                ...state,
                shopListLoading: false,
                shopList: action.payload.data,
              };
              break;
            case GET_SHOP_FAILED:
              state = {
                ...state,
                error: action.payload,
                shopListLoading: false,
              };
              break
              case GET_PRODUCT:
                state =  {
                  ...state,
                  productListLoading: true,
                };
                break;
              case GET_PRODUCT_SUCCESSFUL:
                state ={
                  ...state,
                  productListLoading: false,
                  productList: action.payload.data,
                };
                break;
              case GET_PRODUCT_FAILED:
                state = {
                  ...state,
                  error: action.payload,
                  productListLoading: false,
                };
                break
             
                case GET_EMPLOYEE:
                  state =  {
                    ...state,
                    employeeLoading: true,
                  };
                  break;
                case GET_EMPLOYEE_SUCCESSFUL:
                  state ={
                    ...state,
                    employeeLoading: false,
                    employeeList: action.payload.data,
                  };
                  break;
                case GET_EMPLOYEE_FAILED:
                  state = {
                    ...state,
                    error: action.payload,
                    employeeLoading: false,
                  };
                  break
                  case POST_EMPLOYEE:
                    state = {
                      ...state,
                      adding: true,
                     
                    };
                    break;
                  case POST_EMPLOYEE_SUCCESSFUL:
                    state = {
                      ...state,
                      adding: false,
                      message: action.payload.message,
                    
                    };
                    break;
                  case POST_EMPLOYEE_FAILED:
                    state = {
                      ...state,
                      adding: false,
                    };
                    break;
                    case GET_SHOP_PRODUCT:
                      state =  {
                        ...state,
                        shopProductLoading: true,
                      };
                      break;
                    case GET_SHOP_PRODUCT_SUCCESSFUL:
                      state ={
                        ...state,
                        shopProductLoading: false,
                        shopProduct: action.payload.data,
                      };
                      break;
                    case GET_SHOP_PRODUCT_FAILED:
                      state = {
                        ...state,
                        error: action.payload,
                        shopProductLoading: false,
                      };
                      break
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default ProductReducer;

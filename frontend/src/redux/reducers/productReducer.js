import * as actionTypes from "../constants/productConstants";

export const getProductsReducer = (
  state = { products: [], loading: true },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };

    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getProductDetailsReducer = (
  state = { product: {}, loading: true },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      console.log("productReducer.js: GET_PRODUCT_DETAILS_REQUEST");
      return {
        loading: true,
        product: {},
      };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      console.log("productReducer.js: GET_PRODUCT_DETAILS_SUCCESS");
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      console.log("productReducer.js: GET_PRODUCT_DETAILS_FAIL");
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      console.log("productReducer.js: GET_PRODUCT_DETAILS_RESET");
      return {
        loading: false,
        product: {},
      };
    default:
      console.log("productReducer.js: default");
      console.log(action.type);
      return state;
  }
};

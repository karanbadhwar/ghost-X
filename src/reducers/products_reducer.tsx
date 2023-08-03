import { Action } from "../Enums & Interface/ActionProductEnum";
import IState from "./../Enums & Interface/IProductState";
import Product from "./../components/Product";
import FeaturedProducts from "./../components/FeaturedProducts";
//Interface
interface IAction {
  type: Action;
  payload?: any;
}

const products_reducer = (state: IState, action: IAction) => {
  if (action.type === Action.SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === Action.SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === Action.GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === Action.GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product: any) => product.featured === true
    );

    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products,
    };
  }
  if (action.type === Action.GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }
  if (action.type === Action.GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }
  if (action.type === Action.GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }
  if (action.type === Action.GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;

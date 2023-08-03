import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import IState from "../Enums & Interface/IProductState";
import { Action } from "../Enums & Interface/ActionProductEnum";
import Product from "./../components/Product";
import IProduct from "../Enums & Interface/IProduct";
const initialState = {
  isSidebarOpen: false,
  openSidebar: () => {},
  closeSidebar: () => {},
  fetchSingleProduct: (url: string) => {},
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {} as IProduct,
};

const ProductsContext = React.createContext({} as IState);

export const ProductsProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Open Side Bar Function
  const openSidebar = () => {
    dispatch({ type: Action.SIDEBAR_OPEN });
  };

  // Close Side Bar Function
  const closeSidebar = () => {
    dispatch({ type: Action.SIDEBAR_CLOSE });
  };

  //Fetch All products
  const fetchProduct = async () => {
    dispatch({ type: Action.GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const Products = response.data;

      dispatch({ type: Action.GET_PRODUCTS_SUCCESS, payload: Products });
    } catch (error) {
      dispatch({ type: Action.GET_PRODUCTS_ERROR });
    }
  };

  //Fetch Single product
  const fetchSingleProduct = async (url: string) => {
    dispatch({ type: Action.GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      const singleProduct = response.data;

      dispatch({
        type: Action.GET_SINGLE_PRODUCT_SUCCESS,
        payload: singleProduct,
      });
    } catch (error) {
      dispatch({ type: Action.GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};

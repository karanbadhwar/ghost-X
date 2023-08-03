import { IFitlerAction } from "../Enums & Interface/ActionFilterProducts";
import { IFilterState } from "../Enums & Interface/IFilterState";
import { FilterAction } from "../Enums & Interface/ActionFilterProducts";
import GridView from "./../components/GridView";
import IProduct from "../Enums & Interface/IProduct";
const filter_reducer = (state: IFilterState, action: IFitlerAction) => {
  if (action.type === FilterAction.LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p: IProduct) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === FilterAction.SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === FilterAction.SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }

  if (action.type === FilterAction.UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === FilterAction.SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];

    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.price - a.price;
      });
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === FilterAction.UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === FilterAction.FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, company, color, price, shipping, category } = state.filters;
    let tempProducts = [...all_products];

    //Filtering
    //Text Search
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text.toLowerCase());
      });
    }

    //Category
    if (category !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.category === category;
      });
    }

    //Company
    if (company !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.company === company;
      });
    }

    //Colors
    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }
    //Price
    tempProducts = tempProducts.filter((product) => product.price <= price);
    //Shipping
    if (shipping) {
      tempProducts = tempProducts.filter((product) => {
        return product.shipping === true;
      });
    }

    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === FilterAction.CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;

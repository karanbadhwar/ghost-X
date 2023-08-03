import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";
import { FilterAction } from "../Enums & Interface/ActionFilterProducts";
import { IFilterState } from "../Enums & Interface/IFilterState";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  setGridView: () => {},
  setListView: () => {},
  sort: "price-lowest",
  updateSort: (e: React.ChangeEvent<HTMLSelectElement>) => {},
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
  clearFilters: () => {},
  updateFilters: (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {},
};

const FilterContext = React.createContext({} as IFilterState);

export const FilterProvider = ({ children }: { children: JSX.Element }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * useEffect for first fetch
   */
  useEffect(() => {
    dispatch({ type: FilterAction.LOAD_PRODUCTS, payload: products });
  }, [products]);

  /**
   * useEffect for the what sort of sorting we want prices, names or list view
   */
  useEffect(() => {
    dispatch({ type: FilterAction.FILTER_PRODUCTS });
    dispatch({ type: FilterAction.SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  // Sort for Grid View
  const setGridView = () => {
    dispatch({ type: FilterAction.SET_GRIDVIEW });
  };

  /**
   * sorting for List view
   */
  const setListView = () => {
    dispatch({ type: FilterAction.SET_LISTVIEW });
  };

  /**
   *
   * @param e Event
   * to update the way we want to sort our products
   */
  const updateSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //For Demonstration
    // const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: FilterAction.UPDATE_SORT, payload: value });
  };

  /**
   * @param e Event
   * Function to manage the Filtes on the Left side of the page
   */
  const updateFilters = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const event = e.target as HTMLInputElement;
    let name = event.name;
    let value: string | number | boolean = event.value;

    if (name === "category") {
      value = event.textContent as string;
    }
    if (name === "color") {
      value = event.dataset.color!;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = event.checked;
    }
    dispatch({
      type: FilterAction.UPDATE_FILTERS,
      payload: {
        name,
        value,
      },
    });
  };

  /**
   * Function to clear all the settings for filters
   */
  const clearFilters = () => {
    dispatch({ type: FilterAction.CLEAR_FILTERS });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};

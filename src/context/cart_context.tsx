import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import { CartAction } from "../Enums & Interface/CartAction";
import { ICartState } from "../Enums & Interface/ICartState";
import IProduct from "../Enums & Interface/IProduct";

//Localstorage
const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    // console.log(JSON.parse(localStorage.getItem("cart")!));
    return JSON.parse(localStorage.getItem("cart")!);
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
  addToCart: (
    id: string,
    color: string,
    amount: number,
    product: IProduct
  ) => {},
  clearCart: () => {},
  removeItem: (id: string) => {},
  toggleAmount: (id: string, value: string) => {},
};

const CartContext = React.createContext({} as ICartState);

export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //UseEffect
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: CartAction.COUNT_CART_TOTALS });
  }, [state.cart]);

  //add to cart
  const addToCart = (
    id: string,
    color: string,
    amount: number,
    product: IProduct
  ) => {
    dispatch({
      type: CartAction.ADD_TO_CART,
      payload: { id, color, amount, product },
    });
  };

  //Remove Item
  const removeItem = (id: string) => {
    dispatch({ type: CartAction.REMOVE_CART_ITEM, payload: id });
  };

  //Toggle Amount
  const toggleAmount = (id: string, value: string) => {
    dispatch({
      type: CartAction.TOGGLE_CART_ITEM_AMOUNT,
      payload: { id, value },
    });
  };

  //Clear Cart
  const clearCart = () => {
    dispatch({ type: CartAction.CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, toggleAmount, clearCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};

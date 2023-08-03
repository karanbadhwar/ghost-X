import { CartAction, ActionType } from "../Enums & Interface/CartAction";

import { ICartState } from "../Enums & Interface/ICartState";

const cart_reducer = (state: ICartState, action: ActionType) => {
  if (action.type === CartAction.ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    // console.log(product);

    const tempItem = state.cart.find((i) => i.id === id + color);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        // let totalCartAmount = state.cart.filter((p) => p.id.startsWith(id));
        // totalCartAmount = totalCartAmount.map((item) => item.amount);
        // console.log(totalCartAmount);

        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;

          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color: color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === CartAction.REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => {
      return item.id !== action.payload;
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === CartAction.CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === CartAction.COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;

        total.total_items += amount;
        total.total_amount += price * amount;

        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );

    return { ...state, total_amount, total_items };
  }

  if (action.type === CartAction.TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            return item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;

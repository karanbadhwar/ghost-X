export enum CartAction {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
  TOGGLE_CART_ITEM_AMOUNT = "TOGGLE_CART_ITEM_AMOUNT",
  CLEAR_CART = "CLEAR_CART",
  COUNT_CART_TOTALS = "COUNT_CART_TOTALS",
}

export interface ActionType {
  type: CartAction;
  payload?: any;
}

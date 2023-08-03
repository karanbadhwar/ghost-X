import IProduct from "./IProduct";

export interface ICartState {
  cart: any[];
  total_items: number;
  total_amount: number;
  shipping_fee: number;
  addToCart: (
    id: string,
    color: string,
    amount: number,
    product: IProduct
  ) => void;
  clearCart: () => void;
  removeItem: (id: string) => void;
  toggleAmount: (id: string, value: string) => void;
}

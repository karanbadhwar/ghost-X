import IProduct from "./IProduct";

export default interface IState {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  products_loading: boolean;
  products_error: boolean;
  products: IProduct[];
  featured_products: IProduct[];
  single_product_loading: boolean;
  single_product_error: boolean;
  single_product: IProduct;
  fetchSingleProduct: (url: string) => void;
}

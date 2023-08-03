import IProduct from "./IProduct";

export interface IFilterState {
  filtered_products: IProduct[];
  all_products: IProduct[];
  grid_view: boolean;
  setListView: () => void;
  setGridView: () => void;
  sort: string;
  updateSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  filters: {
    text: string;
    company: string;
    category: string;
    color: string;
    min_price: number;
    max_price: number;
    price: number;
    shipping: boolean;
  };
  clearFilters: () => void;
  updateFilters: (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

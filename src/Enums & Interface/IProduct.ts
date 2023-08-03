export interface IImages {
  images: {
    id: string;
    width: number;
    height: number;
    url: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width: number;
        height: number;
      };
    };
    filename: string;
  }[];
}

export default interface IProduct extends IImages {
  id: string;
  name: string;
  price: number;
  image?: string;
  color: string[];
  company: string;
  description: string;
  category: string;
  shipping: boolean;
  stars: number;
  reviews: number;
  stock: number;
  colors: string[];
  amount: number;
}

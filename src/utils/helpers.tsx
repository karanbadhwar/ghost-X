import IProduct from "../Enums & Interface/IProduct";

export const formatPrice = (price: number): string => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CAD",
  }).format(price / 100);
  //   return newNumber;
};

export const getUniqueValues = (
  products: IProduct[],
  value: keyof IProduct
): string[] => {
  let unique: any = products.map((product: IProduct) => product[value]);
  if (value === "colors") {
    unique = unique.flat();
  }
  unique = new Set(unique);
  return ["all", ...unique];
};

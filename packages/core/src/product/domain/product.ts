export type ProductId = string;
export type ProductPrice = string;
export type ProductName = string;

export interface Product {
  id: ProductId;
  name: ProductName;
  price: ProductPrice;
}

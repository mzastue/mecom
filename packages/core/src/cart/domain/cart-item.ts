import { ProductPrice, ProductId } from "../../product/domain/product";

type Quantity = number;
type Title = string;

export interface CartItem {
  id: ProductId;
  title: Title;
  price: ProductPrice;
  quantity: Quantity;
}

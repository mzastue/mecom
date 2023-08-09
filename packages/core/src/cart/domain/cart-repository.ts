import { Cart } from "./cart";

export interface CartRepository {
  save(cart: Cart): Promise<void>;
  get(): Promise<Cart>;
}

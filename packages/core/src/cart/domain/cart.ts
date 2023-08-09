import { Product } from "../../product/domain/product";
import { CartItem } from "./cart-item";

export class Cart {
  constructor(private readonly cartItems: CartItem[]) {}

  addProduct(product: Product): Cart {
    const existingItemIndex = this.cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex != -1) {
      const existingItem = this.cartItems[existingItemIndex];
      const items = [...this.cartItems];
      items[existingItemIndex] = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      return new Cart(items);
    }

    const newCartItem = {
      id: product.id,
      price: product.price,
      quantity: 1,
      title: product.name,
    };

    return new Cart([...this.cartItems, newCartItem]);
  }

  get items(): CartItem[] {
    return this.cartItems;
  }
}

"use client";

import * as React from "react";
import { type CartRepository, Cart, AddProductToCartUseCase, Product } from "core";
import { useState } from "react";
import { Button, Header } from "ui";

function useReactCartRepo() {
  const [cart, setCart] = useState<Cart>(new Cart([]));
  const repo: CartRepository = {
    async save(cart: Cart): Promise<void> {
      setCart(cart);
    },

    async get(): Promise<Cart> {
      return Promise.resolve(cart);
    },
  };

  return [repo, cart];
}

export default function Page() {
  const [repo, cart] = useReactCartRepo();
  const addToCartUseCase = new AddProductToCartUseCase(repo);

  const handleAddToCart = (product: Product) => {
    addToCartUseCase.handle(product);
  };

  return (
    <>
      <Header text="Web" />
      <pre>{JSON.stringify(cart.items, null, 2)}</pre>
      <ul>
        <li>t-shirt <Button onClick={() => handleAddToCart({
          id: "PROD-3",
          name: "T-SHIRT",
          price: "111 PLN",
        })} label={"Add to cart"} /></li>
        <li>pants <Button onClick={() => handleAddToCart({
          id: "PROD-1",
          name: "PANTS",
          price: "21 PLN",
        })} label={"Add to cart"} /></li>
        <li>boots <Button onClick={() => handleAddToCart({
          id: "PROD-2",
          name: "BOOTS",
          price: "551 PLN",
        })} label={"Add to cart"} /></li>
      </ul>
    </>
  );
}

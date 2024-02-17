"use client";
import { Button } from "@/components/ui/button";
import useCartStore from "@/store";
import { Product } from "@/typings/productTypings";
import React from "react";
import RemoveFromCart from "./RemoveFromCart";

interface AddToCartProps {
  product: Product;
}

const AddToCart = (props: AddToCartProps) => {
  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);

  const howManyInCart = cart.filter(
    (item) => item.meta.sku === props.product.meta.sku
  ).length;

  const handleAdd = () => {
    addToCart(props.product);
  };
  if (howManyInCart > 0) {
    return (
      <div className="flex space-x-5 items-center">
        <RemoveFromCart product={props.product} />
        <span>{howManyInCart}</span>
        <Button className="bg-blue-200 hover:bg-blue-400" onClick={handleAdd}>
          {" "}
          +
        </Button>
      </div>
    );
  }
  return <Button onClick={handleAdd}>Add to cart</Button>;
};

export default AddToCart;

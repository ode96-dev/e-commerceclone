"use client";
import { Button } from "@/components/ui/button";
import useCartStore from "@/store";
import { Product } from "@/typings/productTypings";
import React from "react";

interface RemoveFromCartProps {
  product: Product;
}

const RemoveFromCart = (props: RemoveFromCartProps) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemove = () => {
    removeFromCart(props.product);
  };
  return (
    <Button className="bg-blue-400 hover:bg-blue-400/50" onClick={handleRemove}>
      -
    </Button>
  );
};

export default RemoveFromCart;

import ShoppingBasket from "@/components/basket/ShoppingBasket";
import { ShoppingCartIcon } from "lucide-react";
import React from "react";

const Basket = () => {
  return (
    <div className="w-full p-10 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <ShoppingCartIcon className="w-10 h-10" />
        <h1 className="text-3xl font-semibold">Your cart</h1>
      </div>
      <p className="mt-2 mb-5">Review items and checkout</p>
      <ShoppingBasket />
    </div>
  );
};

export default Basket;

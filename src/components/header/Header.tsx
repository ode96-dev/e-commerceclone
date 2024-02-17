"use client";
import { Grid, Heart, LayoutGrid, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchForm from "./_components/SearchForm";
import useCartStore from "@/store";
import { getCartTotal } from "@/lib/getCartTotal";

const Header = () => {
  const cart = useCartStore((state) => state.cart);
  const cartTotal = getCartTotal(cart);
  return (
    <header className="flex flex-col md:flex-row items-center bg-orange-400 px-10 py-7 space-x-5">
      <Link href={`/`} className="mb-5 md:mb-0">
        <Image
          width={150}
          height={150}
          src={`/images/logo/logo.svg`}
          alt="e-commerce logo"
        />
      </Link>
      <SearchForm />
      <div className="flex space-x-5 mt-5 md:mt-0">
        <Link
          href={`/`}
          className="text-white font-bold items-center space-x-2 text-sm hidden xl:flex"
        >
          <Grid size={20} />
          <p>Department</p>
        </Link>
        <Link
          href={`/`}
          className="text-white font-bold items-center space-x-2 text-sm hidden xl:flex"
        >
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>
        <Link
          href={`/`}
          className="text-white font-bold items-center space-x-2 text-sm hidden xl:flex"
        >
          <Heart size={20} />
          <div>
            <p className="text-xs font-extralight">Reorder</p>
            <p>My Items</p>
          </div>
        </Link>
        <Link
          href={`/`}
          className="text-white font-bold items-center space-x-2 text-sm hidden xl:flex"
        >
          <User size={20} />
          <div>
            <p className="text-xs font-extralight">Sign in</p>
            <p>Account</p>
          </div>
        </Link>
        <Link
          href={`/basket`}
          className="text-white font-bold items-center space-x-2 text-sm hidden xl:flex"
        >
          <ShoppingBag size={20} />
          <div>
            <p className="text-xs font-extralight">
              {cart.length > 0 ? `${cart.length} items` : `No items`}
            </p>
            {cartTotal}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;

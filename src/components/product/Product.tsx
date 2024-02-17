import { Organic } from "@/typings/searchTypings";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

interface ProductProps {
  product: Organic;
}

const Product = (props: ProductProps) => {
  return (
    <Link
      href={{
        pathname: "/product",
        query: { url: props.product.url },
      }}
      className="flex flex-col relative border rounded-md h-full p-5"
    >
      <Image
        src={props.product.image}
        alt={props.product.title}
        width={200}
        height={200}
        className="mx-auto"
      />
      <p className="text-xl font-bold">
        {props.product.price?.currency}
        {props.product.price.price}
      </p>
      {props.product.badge && (
        <Badge className="w-fit absolute top-2 right-2">
          {props.product.badge}
        </Badge>
      )}
      <p className="font-light">{props.product.title}</p>
      {props.product.rating && props.product.rating.count > 0 ? (
        <p className="text-yellow-300 text-sm">
          {props.product.rating.rating}⭐️
          <span className="text-gray-400 ml-2">
            ({props.product.rating.count})
          </span>
        </p>
      ) : (
        ""
      )}
    </Link>
  );
};

export default Product;

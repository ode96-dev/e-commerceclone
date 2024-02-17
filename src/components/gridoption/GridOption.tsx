import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface GridOptionProps {
  title: string;
  className?: string;
  image?: string;
}

const GridOption = (props: GridOptionProps) => {
  return (
    <Link
      href={{
        pathname: "/search",
        query: { q: props.title },
      }}
      className={cn("grid-option relative", props.className)}
    >
      <h2 className="text-xl font-bold">{props.title}</h2>
      {props.image && (
        <Image
          src={props.image}
          alt={props.title}
          layout="fill"
          className="object-cover opacity-20 rounded-md"
        />
      )}
    </Link>
  );
};

export default GridOption;

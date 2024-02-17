import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product } from "@/typings/productTypings";

interface ProductTableProps {
  product: Product;
}

const ProductTable = (props: ProductTableProps) => {
  return (
    <Table>
      <TableCaption>Item specifications</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Specification</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.product.specifications.map((spec) => (
          <TableRow key={spec.key}>
            <TableCell className="font-bold">{spec.key}</TableCell>{" "}
            <TableCell className="font-medium">{spec.value}</TableCell>{" "}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductTable;

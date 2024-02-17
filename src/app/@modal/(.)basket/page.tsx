"use client";
import Basket from "@/app/basket/page";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

import React from "react";

const BasketInterception = () => {
  const router = useRouter();
  function onDismiss() {
    router.back();
  }
  return (
    <Dialog
      open
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          onDismiss();
        }
      }}
    >
      <DialogContent className="h-4/5 w-full overflow-scroll max-q-3xl">
        <DialogHeader>
          <DialogTitle>Basket</DialogTitle>
        </DialogHeader>
        <Basket />
      </DialogContent>
    </Dialog>
  );
};

export default BasketInterception;

import React from "react";
import clsx from "clsx";

import { THomeCalculateCardSchema } from "@/entities/home-calculate-card/model";

export function ShippingDetailsCard({
  className,
  initial: { from, to, size },
}: {
  className?: string;
  initial: THomeCalculateCardSchema;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-2 bg-white rounded-lg h-fit w-full p-8 shadow-lg",
        className
      )}
    >
      <p>Детали</p>
      <p>{from}</p>
      <p>{to}</p>
      <p>{size}</p>
    </div>
  );
}

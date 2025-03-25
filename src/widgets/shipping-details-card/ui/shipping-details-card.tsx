import React from "react";
import clsx from "clsx";

export function ShippingDetailsCard({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-2 bg-white rounded-lg h-fit w-full p-8 shadow-lg",
        className
      )}
    >
      <p>Детали</p>
    </div>
  );
}

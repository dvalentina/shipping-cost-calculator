"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import { ShippingDetailsCard } from "@/widgets/shipping-details-card";
import { Stepper } from "@/widgets/stepper";

export default function CalculatorPage() {
  const searchParams = useSearchParams();

  const initial = {
    from: searchParams.get("from"),
    to: searchParams.get("to"),
    size: searchParams.get("size"),
  };

  return (
    <div className="grid grid-cols-subgrid col-span-16 py-40">
      <Stepper />
      <ShippingDetailsCard
        className="col-start-11 col-span-3"
        initial={initial}
      />
    </div>
  );
}

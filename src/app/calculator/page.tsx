import React from "react";

import { ShippingDetailsCard } from "@/widgets/shipping-details-card";

export default function CalculatorPage() {
  return (
    <div className="grid grid-cols-subgrid col-span-16 py-40">
      <ShippingDetailsCard className="col-start-11 col-span-3" />
    </div>
  );
}

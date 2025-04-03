import React from "react";

import { CollapsibleStep } from "@/features/collapsible-step";
import { defineStepper } from "@stepperize/react";

const { Scoped, useStepper, steps } = defineStepper(
  { id: "step-1", title: "Step 1", description: "First step" },
  { id: "step-2", title: "Step 2", description: "Second step" },
  { id: "step-3", title: "Step 3", description: "Third step" }
);

export function Stepper() {
  const methods = useStepper();

  const specialCondition = true;

  return (
    <div className="grid subgrid col-start-4 col-span-6">
      {methods.when("step-1", (step) => (
        <CollapsibleStep {...step} />
      ))}
      {methods.when(["step-2", specialCondition], (step) => (
        <CollapsibleStep {...step} />
      ))}
      {methods.when("step-3", (step) => (
        <CollapsibleStep {...step} />
      ))}
    </div>
  );
}

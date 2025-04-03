import React from "react";
import {
  Button,
  Disclosure,
  DisclosurePanel,
  Heading,
} from "react-aria-components";

export function CollapsibleStep({ title, description }) {
  return (
    <Disclosure className="bg-white rounded-lg shadow-lg h-fit p-8">
      <Heading>
        <Button slot="trigger">{title}</Button>
      </Heading>
      <DisclosurePanel>
        <p>{description}</p>
      </DisclosurePanel>
    </Disclosure>
  );
}

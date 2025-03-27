"use client";

import React from "react";

import { ComboBox, ComboBoxItem } from "@/shared/ui/combo-box";

const cities = [
  { id: 1, name: "Москва" },
  { id: 2, name: "Санкт-Петербург" },
  { id: 3, name: "Казань" },
  { id: 4, name: "Новосибирск" },
  { id: 5, name: "Екатеринбург" },
];

export function CityInput({ label }: { label: string }) {
  return (
    <ComboBox label={label} placeholder="Город" defaultItems={cities}>
      {(city) => <ComboBoxItem>{city.name}</ComboBoxItem>}
    </ComboBox>
  );
}

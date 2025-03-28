import React from "react";

import { CityInput } from "@/features/city-input";
import { ParcelSizeSelect } from "@/features/parcel-size-select";
import { Button } from "@/shared/ui/button";

export function HomeCalculateCard() {
  return (
    <div className="flex flex-col gap-4 shadow-xl rounded-3xl bg-white px-16 py-8 w-full">
      <h1 className="text-heading font-semibold">
        Рассчитать стоимость доставки
      </h1>
      <div className="flex gap-4">
        <CityInput label="Откуда" />
        <CityInput label="Куда" />
        <ParcelSizeSelect />
        {/* <select>
          <option value="" disabled selected>
            Размер посылки
          </option>
        </select> */}
        <Button className="ml-auto">Рассчитать</Button>
      </div>
    </div>
  );
}

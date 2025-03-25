import React from "react";
import { Button } from "@/shared/button";
import { Input } from "@/shared/input";

export function HomeCalculateCard() {
  return (
    <div className="flex flex-col gap-4 shadow-xl rounded-3xl bg-white px-16 py-8 w-full">
      <h1 className="text-heading font-semibold">Рассчитать доставку</h1>
      <div className="flex gap-4">
        <Input placeholder="Откуда" />
        <Input placeholder="Куда" />
        <select>
          <option value="" disabled selected>
            Размер посылки
          </option>
        </select>
        <Button className="ml-auto">Рассчитать</Button>
      </div>
    </div>
  );
}

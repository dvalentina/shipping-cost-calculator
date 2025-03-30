"use client";

import React from "react";
import { Form } from "react-aria-components";
import { useForm } from "react-hook-form";

import {
  homeCalulateCardSchema,
  THomeCalculateCardSchema,
} from "@/entities/home-calculate-card/model";
import { CityInput } from "@/features/city-input";
import { ParcelSizeMenu } from "@/features/parcel-size-menu";
import { Button } from "@/shared/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

export function HomeCalculateCard() {
  const { control, handleSubmit } = useForm<THomeCalculateCardSchema>({
    defaultValues: { from: "", to: "", size: "" },
    resolver: zodResolver(homeCalulateCardSchema),
  });

  const onSubmit = (data: THomeCalculateCardSchema) => {
    console.log(data);
  };

  return (
    <Form
      className="flex flex-col gap-4 shadow-xl rounded-3xl bg-white px-16 pt-8 pb-10 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-heading font-semibold">
        Рассчитать стоимость доставки
      </h1>
      <div className="flex gap-4">
        <CityInput label="Откуда" control={control} name="from" />
        <CityInput label="Куда" control={control} name="to" />
        <ParcelSizeMenu control={control} name="size" />
        <Button className="ml-auto" type="submit">
          Рассчитать
        </Button>
      </div>
    </Form>
  );
}

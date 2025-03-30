"use client";

import React, { useEffect } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";

import { ComboBox, ComboBoxItem, IComboBox } from "@/shared/ui/combo-box";

interface ICity {
  id: number;
  name: string;
}

const cities: ICity[] = [
  { id: 1, name: "Москва" },
  { id: 2, name: "Санкт-Петербург" },
  { id: 3, name: "Казань" },
  { id: 4, name: "Новосибирск" },
  { id: 5, name: "Екатеринбург" },
];

interface ICityInput<T extends FieldValues> extends IComboBox<ICity> {
  name: Path<T>;
  control: Control<T>;
}

export function CityInput<T extends FieldValues>({
  label,
  name,
  control,
  ...props
}: ICityInput<T>) {
  const {
    field: { value, onChange },
    fieldState: { error, invalid },
  } = useController({ name, control });

  useEffect(() => {
    console.log(name, value, error);
  }, [error]);

  return (
    <ComboBox
      label={label}
      placeholder="Город"
      defaultItems={cities}
      onInputChange={onChange}
      formValue="text"
      inputValue={value}
      errorMessage={error?.message}
      isRequired
      validationBehavior="aria"
      isInvalid={invalid}
      {...props}
    >
      {(city) => <ComboBoxItem>{city.name}</ComboBoxItem>}
    </ComboBox>
  );
}

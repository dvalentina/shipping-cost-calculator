"use client";

import React, { useState } from "react";
import clsx from "clsx";
import {
  ComboBox as ComboBoxPrimitive,
  ComboBoxProps,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  Popover,
} from "react-aria-components";

interface IComboBox<T extends object>
  extends Omit<ComboBoxProps<T>, "children"> {
  label: string;
  placeholder: string;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

function ComboBox<T extends object>({
  label,
  placeholder,
  children,
  onInputChange,
  ...props
}: IComboBox<T>) {
  const [active, setActive] = useState(false);

  const handleInputChange = (value: string) => {
    setActive(!!value);
    if (onInputChange) onInputChange(value);
  };

  return (
    <ComboBoxPrimitive
      onInputChange={handleInputChange}
      className="w-full"
      {...props}
    >
      <div className="relative group h-14 w-full">
        <Label
          className={clsx(
            "absolute top-0 left-0 text-stone-500 w-full size-full flex items-center px-4 transition-all duration-200 ease-in-out group-has-focus:h-1/2 group-has-focus:text-sm group-has-focus:text-stone-600 group-has-focus:pt-1",
            active && "!h-1/2 !text-sm !text-stone-600 !pt-1"
          )}
        >
          {label}
        </Label>
        <Input
          className="size-full bg-stone-100 rounded-md px-4 pt-5 focus:outline-2 focus:outline-amber-500 focus:bg-white hover:bg-orange-50 focus:placeholder:text-stone-400 placeholder:text-transparent placeholder:transition-color placeholder:duration-100"
          placeholder={placeholder}
        />
      </div>
      <Popover className="bg-white rounded-md shadow-md overflow-hidden w-(--trigger-width) p-1">
        <ListBox>{children}</ListBox>
      </Popover>
    </ComboBoxPrimitive>
  );
}

function ComboBoxItem({ className, ...props }: ListBoxItemProps) {
  return (
    <ListBoxItem
      className={({ isFocused, isSelected }) =>
        clsx(
          "px-4 py-3 rounded-sm transition-background-color duration-100",
          isFocused && "bg-orange-100",
          isSelected && "bg-orange-50 font-semibold",
          className
        )
      }
      {...props}
    />
  );
}

export { ComboBox, ComboBoxItem };

"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { Box, Luggage, Mail, Package, Package2 } from "lucide-react";
import {
  Button,
  Input,
  Key,
  Label,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
  Selection,
  Text,
} from "react-aria-components";

import { ISize } from "@/entities/parcel/model";

const parcelSizes: ISize[] = [
  {
    id: "envelope",
    name: "Конверт",
    width: "34",
    length: "27",
    height: "2",
    weight: "0.5",
    icon: <Mail className="size-6" />,
  },
  {
    id: "box-s",
    name: "Коробка S",
    width: "20",
    length: "15",
    height: "10",
    weight: "1",
    icon: <Box className="size-5" />,
  },
  {
    id: "box-m",
    name: "Коробка M",
    width: "33",
    length: "22",
    height: "15",
    weight: "5",
    icon: <Package className="size-6" />,
  },
  {
    id: "box-l",
    name: "Коробка L",
    width: "50",
    length: "35",
    height: "30",
    weight: "15",
    icon: <Package2 className="size-7" />,
  },
  {
    id: "suitcase",
    name: "Чемодан",
    width: "55",
    length: "35",
    height: "77",
    weight: "30",
    icon: <Luggage className="size-9" />,
  },
];

const sizeToTextValue = (size: ISize) =>
  `${size.name}, ${size.width}x${size.length}x${size.height} см, до ${size.weight} кг`;

export function ParcelSizeMenu() {
  const [selection, setSelection] = useState<Selection>();

  const handleSelectionChange = (selection: Selection) => {
    setSelection(selection);
    console.log(selection);
  };

  const chosen = parcelSizes.find((item) =>
    (selection as Set<Key>)?.has(item.id)
  );

  return (
    <MenuTrigger>
      <div className="group w-full min-w-0 h-14">
        <Button className="relative group h-full w-full bg-stone-100 rounded-md px-4 pt-5 focus:outline-2 data-pressed:outline-2 focus:outline-amber-500 data-pressed:outline-amber-500 focus:bg-white  data-pressed:bg-white hover:bg-orange-50 overflow-hidden">
          <Label
            className={clsx(
              "absolute top-0 left-0 text-stone-500 w-full size-full flex items-center px-4 transition-all duration-200 ease-in-out group-has-focus:h-1/2 group-has-data-pressed:h-1/2 group-has-focus:text-sm group-has-data-pressed:text-sm group-has-focus:text-stone-600 group-has-data-pressed:text-stone-600 group-has-focus:pt-1 group-has-data-pressed:pt-1",
              chosen && "!h-1/2 !text-sm !text-stone-600 !pt-1"
            )}
          >
            Размер посылки
          </Label>
          <Input className="hidden" />
          {chosen ? (
            <p className="w-full truncate block text-left">
              {sizeToTextValue(chosen)}
            </p>
          ) : (
            <p className="group-has-focus:text-stone-400 group-has-data-pressed:text-stone-400 text-transparent transition-color duration-100 w-full block text-left">
              Не выбрано
            </p>
          )}
        </Button>
        <Popover className="bg-white rounded-md shadow-md overflow-hidden w-(--trigger-width) p-1 ">
          <Menu
            selectionMode="single"
            onSelectionChange={handleSelectionChange}
            selectedKeys={selection || undefined}
            items={parcelSizes}
          >
            {(item) => {
              return (
                <MenuItem
                  className={({ isFocused, isSelected }) =>
                    clsx(
                      "px-4 py-3 rounded-sm transition-background-color duration-100 flex gap-4",
                      isFocused && "bg-orange-100",
                      isSelected && "bg-orange-50 font-semibold"
                    )
                  }
                  textValue={sizeToTextValue(item)}
                >
                  <div className="w-8 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <Text slot="label" className="font-semibold">
                      {item.name}
                    </Text>
                    <Text slot="description" className="text-stone-600 text-sm">
                      {sizeToTextValue(item).replace(`${item.name}, `, "")}
                    </Text>
                  </div>
                </MenuItem>
              );
            }}
          </Menu>
        </Popover>
      </div>
    </MenuTrigger>
  );
}

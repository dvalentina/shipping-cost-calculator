"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/shared/ui/button";

function NotFound() {
  const router = useRouter();

  const returnBack = () => {
    router.back();
  };

  return (
    <div className="grid grid-cols-subgrid col-span-16">
      <div className="my-auto col-start-5 col-span-9 flex items-center gap-20">
        <h1 className="text-[16rem] font-bold text-amber-500">404</h1>
        <div className="flex flex-col gap-4">
          <div className="flex pt-14 gap-4">
            <h2 className="text-2xl">
              Такой страницы
              <br /> не существует
            </h2>
          </div>
          <Button onClick={returnBack}>Вернуться назад</Button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

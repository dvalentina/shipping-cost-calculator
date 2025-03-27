import React from "react";
import { PackageOpen } from "lucide-react";

export function Logo() {
  return (
    <div className="bg-white">
      <div className="flex gap-1 font-bold uppercase text-lg">
        Parcel
        <PackageOpen />
        Fast
      </div>
      <div className="bg-(image:--gradient) absolute h-full w-full top-0 left-0 mix-blend-screen" />
    </div>
  );
}

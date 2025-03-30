import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export function Button({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={clsx(
        "flex items-center justify-center bg-accent px-10 h-14 rounded-md text-white font-semibold text-lg cursor-pointer hover:bg-amber-500 focus:outline-2 focus:outline-amber-700 transition-color duration-100 hover:shadow-lg active:shadow-md active:bg-accent",
        className
      )}
    >
      {children}
    </button>
  );
}

//

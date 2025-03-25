import React, { InputHTMLAttributes } from "react";
import clsx from "clsx";

export function Input({
  children,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx("h-12 bg-stone-100 rounded-md px-5", className)}
      {...props}
    >
      {children}
    </input>
  );
}

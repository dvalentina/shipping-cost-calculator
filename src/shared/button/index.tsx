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
        "flex items-center justify-center bg-accent px-10 h-12 rounded-md text-white font-semibold cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
}

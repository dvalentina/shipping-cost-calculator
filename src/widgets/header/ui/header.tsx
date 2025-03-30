import React from "react";
import Link from "next/link";

import { Logo } from "@/shared/ui/logo";

export function Header() {
  return (
    <header
      className="flex fixed items-center h-14 bg-white w-full shadow-md"
      id="header"
    >
      <Link href="/" className="absolute ml-8  italic px-2">
        <Logo />
      </Link>
      <nav className="flex mx-auto gap-8">
        <Link href="/calculator">Калькулятор</Link>
        <Link href="/">Тарифы</Link>
        <Link href="/">Пункты выдачи</Link>
        <Link href="/">О проекте</Link>
      </nav>
    </header>
  );
}

import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Shipping Cost Calculator",
  description: "Developed as a pet project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased `}>
        <Header />
        <div className="fixed w-full top-0 bottom-0 overflow-x-auto">
          <div className="grid grid-cols-16 gap-4 h-full">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

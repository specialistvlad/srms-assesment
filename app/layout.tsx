import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavigationBar from "./navigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Student Result Management System",
  description: "Development Technical Test (Extended Version)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-2 grid-rows-1 gap-1"></div>
        <NavigationBar/>
        <div>{children}</div>
      </body>
    </html>
  );
}

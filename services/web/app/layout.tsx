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
        <div className="flex">
          <div className="w-1/8 h-screen px-8 py-4">
            <NavigationBar />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}

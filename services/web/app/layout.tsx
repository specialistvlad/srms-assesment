import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavigationBar from "./navigationBar";
import Logo from "./logo";

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
        <div className="min-h-screen bg-gray-50 py-6 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-center">
          {/* Left-aligned navigation bar */}
          <NavigationBar />

          {/* Centered block with content */}
          <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10 mt-4">
            <div className="mx-auto max-w-2xl min-w-0">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}

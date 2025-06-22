"use client";

import React from "react";
import { Inter } from "next/font/google";
import LanguageToggle from "../components/language-toggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <title>Job Board Platform MVP</title>
        <meta name="description" content="MVP for Job Board Platform" />
      </head>
      <body className="bg-white text-black font-sans min-h-screen">
        <header className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Job Board Platform</h1>
          <LanguageToggle />
        </header>
        <main className="p-6">{children}</main>
        <footer className="p-4 border-t border-gray-200 text-center text-sm text-gray-500">
          &copy; 2024 Job Board Platform
        </footer>
      </body>
    </html>
  );
}

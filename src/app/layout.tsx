import type { Metadata } from "next";
import {} from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white antialiased">{children}</body>
    </html>
  );
}

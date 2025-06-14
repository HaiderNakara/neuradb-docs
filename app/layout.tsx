import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeuraDB",
  description: "NeuraDB is a vector database for modern applications.",
  generator: "NeuraDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

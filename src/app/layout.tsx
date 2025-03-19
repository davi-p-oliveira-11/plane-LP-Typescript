import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fieldguide",
  description: "Effortless, secure, and intelligent audit management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "devicon/devicon.min.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carter's Profile",
  description: "Carter Ruscica's website for dawdling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammed Raafat | Front-End Engineer",
  description: "Front-End Engineer specializing in React.js and TypeScript. Building scalable, production-level web applications.",
  keywords: ["Front-End Developer", "React.js", "TypeScript", "Software Engineer", "Web Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

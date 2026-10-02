import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Portfolio3DScene from "@/components/Portfolio3DScene";

export const metadata: Metadata = {
  title: "Hitesh Joshi | Freelance Web Developer",
  description: "Building scalable digital products with the MERN stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-transparent text-slate-800 antialiased selection:bg-rose-500/30 selection:text-white overflow-x-hidden">
        <Portfolio3DScene />
        <Header />
        {children}
      </body>
    </html>
  );
}
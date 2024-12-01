import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/global/footer";
import { Header } from "@/components/global/header";


export const metadata: Metadata = {
  title: "Portfolio 3.0",
  description: "This project is a portfolio 3.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`$ antialiased bg-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/global/navbar";
import { Footer } from "@/components/global/footer";


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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

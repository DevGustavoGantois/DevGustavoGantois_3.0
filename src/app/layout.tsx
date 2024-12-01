import type { Metadata } from "next";
import "./globals.css";
import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";  
import { Footer } from "@/components/global/footer";
import { Header } from "@/components/global/header";

const bebas_neue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: ["400"],
  subsets: ["latin"],
});


const plus_jakarta_sans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});


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
        className={`${bebas_neue.variable} ${plus_jakarta_sans.variable} antialiased bg-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

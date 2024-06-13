"use client";
import "./globals.css";
import {Playfair_Display} from "next/font/google";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const playfair_display = Playfair_Display({subsets:["latin"], weight:["400","500","600","700","800",] , variable:"--font-playfair_display"});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={playfair_display.variable}>
        <Header/>
        <StairTransition/>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

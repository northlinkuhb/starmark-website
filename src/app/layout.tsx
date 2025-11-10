import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_layout/Header";
import Footer from "./_layout/Footer";
import ProgressProvider from "@/providers/ProgressProvider";

const PPMoriRegular = localFont({
  src: "./../fonts/pp-mori/PPMori-Regular.woff2",
  variable: "--font-pp-mori-regular",
});

const PPMoriSemibold = localFont({
  src: "./../fonts/pp-mori/PPMori-SemiBold.woff2",
  variable: "--font-pp-mori-semibold",
});

export const metadata: Metadata = {
  title: "Starmark  | Trusted Container & Freight Solutions Since 2005",
  description:
    "With a legacy built on trust, efficiency, and global reach, Starmark  provides reliable container sales, leasing, logistics, warehousing, and supply chain solutions for businesses of every size.",
  metadataBase: new URL("https://starmark.ubnhb.in/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PPMoriRegular.variable} bg-[#F9F9F9] ${PPMoriSemibold.variable} font-ppMoriReqular antialiased`}
      >
        <ProgressProvider>
          <Header />
          {children}
          <Footer />
        </ProgressProvider>
      </body>
    </html>
  );
}

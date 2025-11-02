import type { Metadata } from "next";
import { DM_Serif_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cinex Collection – Premium Hair Growth Oil for Stronger, Fuller Hair",
  description:
    "Transform your hair with Cinex Collection. Our 100% natural oil nourishes the scalp, strengthens roots, and promotes faster, fuller hair growth. Shop now and see visible results.",
  keywords: [
    "hair growth oil",
    "natural hair care",
    "Cinex Collection",
    "hair treatment",
    "scalp nourishment",
    "hair strengthening oil",
  ],
  other: {
    "facebook-domain-verification": "0ipw4yyur974jz237zc7dw0kqy3dpo",
  },
  openGraph: {
    title: "Cinex Collection – Premium Hair Growth Oil",
    description:
      "Experience visible results with Cinex Collection. The all-natural solution for thicker, healthier hair.",
    url: "https://cinexcollection.com.ng",
    siteName: "Cinex Collection",
    images: [
      {
        url: "/og-image.png", // replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "Cinex Hair Growth Oil",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerif.variable} ${montserrat.variable} font-montserrat scroll-smooth`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

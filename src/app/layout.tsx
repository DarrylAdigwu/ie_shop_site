import type { Metadata } from "next";
import type { RootLayoutProps } from "@/types/types";
import "./globals.css";
import { Birthstone, Rochester, Pacifico } from "next/font/google";

const birthstone = Birthstone ({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-birthstone"
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "http://localhost:3000"),
  title: "The IE Shop",
  description: "IE Shop official website",
  icons: {
    icon: "/images/green-ie-logo.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: "The IE Shop",
    description: "Official site for the IE Shop",
    url: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
    siteName: "IE Shop",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "IE Shops Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${birthstone.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}

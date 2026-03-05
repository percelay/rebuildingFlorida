import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apexpainting.co"),
  title: "Apex Painting Co. | Commercial & Residential Painting — Austin, TX",
  description:
    "Austin's trusted commercial and residential painting contractor. Licensed, insured, and Sherwin-Williams certified. Request a free quote today.",
  openGraph: {
    title: "Apex Painting Co. | Commercial & Residential Painting",
    description:
      "Expert interior and exterior painting for commercial and residential clients across Austin, TX. 18+ years of experience.",
    url: "https://apexpainting.co",
    siteName: "Apex Painting Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Painting Co. | Commercial & Residential Painting",
    description:
      "Expert interior and exterior painting for commercial and residential clients across Austin, TX.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://restoringfloridahomes.com"),
  title: "Restoring Florida Homes | Mobile Home Siding & Exterior Repair — Tampa Bay",
  description:
    "Tampa Bay's trusted mobile home siding and exterior repair specialists. Family-owned, BBB A+ rated, 30+ years experience. Vinyl siding, screen rooms, carports & more. Free estimates.",
  openGraph: {
    title: "Restoring Florida Homes | Mobile Home Siding & Exterior Repair",
    description:
      "Expert mobile home siding replacement, exterior repairs, screen rooms, and carports throughout Tampa Bay and Central Florida. 30+ years of experience.",
    url: "https://restoringfloridahomes.com",
    siteName: "Restoring Florida Homes",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restoring Florida Homes | Mobile Home Siding & Exterior Repair",
    description:
      "Tampa Bay's mobile home exterior specialists. Vinyl siding, screen rooms, carports, window replacement & more. BBB A+ rated, 30+ years experience.",
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

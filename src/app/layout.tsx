import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://rac-electrical.vercel.app"
  ),
  title: {
    default:
      "RAC Maintenance & Electrical | Electrician & Property Maintenance in Brighton",
    template: "%s | RAC Maintenance & Electrical",
  },
  description:
    "Professional electrician and property maintenance services in Brighton & Hove. Consumer unit upgrades, EICR certificates, CCTV, fire safety, and general property maintenance.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "RAC Maintenance & Electrical",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

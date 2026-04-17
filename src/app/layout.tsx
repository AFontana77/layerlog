import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

const SITE_URL = "https://www.layerlog.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LayerLog — Search 2,000+ filaments",
    template: "%s | LayerLog",
  },
  description: "LayerLog has 2,000+ filaments with print temperatures, bed adhesion, and brand ratings. Log your prints, track settings that work, and build a personal maker database.",
  keywords: ["3d printing log app", "filament tracker", "print settings log", "3d printer journal", "filament database app"],
  authors: [{ name: "Anvil Road LLC" }],
  creator: "Anvil Road LLC",
  publisher: "Anvil Road LLC",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "LayerLog",
    title: "LayerLog — Search 2,000+ filaments",
    description: "LayerLog has 2,000+ filaments with print temperatures, bed adhesion, and brand ratings. Log your prints, track settings that work, and build a personal maker database.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "LayerLog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LayerLog — Search 2,000+ filaments",
    description: "LayerLog has 2,000+ filaments with print temperatures, bed adhesion, and brand ratings. Log your prints, track settings that work, and build a personal maker database.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/icons/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#6D28D9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

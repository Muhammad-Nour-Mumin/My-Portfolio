import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/Footer";
import { siteMeta, personal } from "@/data/portfolio";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: siteMeta.title,
    template: `%s | ${personal.name}`,
  },
  description: siteMeta.description,
  keywords: [
    "Mohamed Nur Mumin",
    "Full-Stack Web Developer",
    "Software Engineer Somalia",
    "React Developer",
    "Node.js Developer",
    "Flutter Developer",
    "Mogadishu Developer",
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteMeta.url,
    title: siteMeta.title,
    description: siteMeta.description,
    siteName: personal.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
  },
  icons: {
    icon: "/icon",
    apple: "/icon",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-text-body antialiased">
        <ThemeProvider>
          <Link
            href="/#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-text focus:px-4 focus:py-2 focus:text-background"
          >
            Skip to content
          </Link>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

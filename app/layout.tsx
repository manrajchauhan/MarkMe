import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "../components/JsonLd";
import LenisProvider from "../components/LenisProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://markme-5uj.pages.dev"),
  title: {
    default: "MarkMe — Markdown, made memorable",
    template: "%s | MarkMe",
  },
  description: "A warm, focused browser-first Markdown workspace by Manraj Chauhan with instant live preview, flexible split-screen resizing, and automatic browser-local saving.",
  keywords: [
    "MarkMe",
    "Markdown Editor",
    "Markdown Workspace",
    "Live Markdown Preview",
    "Distraction-free Editor",
    "Local Storage Markdown",
    "Manraj Chauhan",
    "Browser-first Markdown App",
    "Privacy Markdown Editor",
  ],
  authors: [{ name: "Manraj Chauhan", url: "https://manrajchauhan.com" }],
  creator: "Manraj Chauhan",
  publisher: "Manraj Chauhan",
  alternates: {
    canonical: "https://markme-5uj.pages.dev",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "MarkMe — Markdown, made memorable",
    description: "A warm, focused Markdown workspace by Manraj Chauhan with instant live preview, flexible split-screen resizing, and automatic browser-local saving.",
    url: "https://markme-5uj.pages.dev",
    siteName: "MarkMe",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MarkMe — Markdown, made memorable",
    description: "A warm, focused Markdown workspace by Manraj Chauhan with instant live preview and local storage privacy.",
    creator: "@mrmanrajchauhan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

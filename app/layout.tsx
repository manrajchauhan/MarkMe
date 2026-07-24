import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MarkMe — Markdown, made memorable",
  description: "A warm, focused Markdown workspace by Manraj Chauhan.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

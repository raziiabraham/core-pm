import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://core-pm-field-course.razii-abrhm.chatgpt.site"),
  title: "CORE / PM — A Self-Paced Product Management Course",
  description: "Twelve practical lessons for re-owning product judgment from decision framing through evidence, strategy, delivery, and learning.",
  openGraph: { title: "CORE / PM — Re-own the PM Core", description: "Four phases. Twelve lessons. One Product Decision Case.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "CORE / PM — Re-own the PM Core", description: "Four phases. Twelve lessons. One Product Decision Case.", images: ["/og.png"] },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>; }

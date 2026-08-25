import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3001"),
  title: "CORE / PM — Re-own the PM Core",
  description: "A four-session, Reforge-grounded Core PM course: frame, learn, choose, commit, and learn from outcomes.",
  openGraph: { title: "CORE / PM — Re-own the PM Core", description: "Four cumulative sessions. One Product Decision Case.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "CORE / PM — Re-own the PM Core", description: "Four cumulative sessions. One Product Decision Case.", images: ["/og.png"] },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>; }

import type { Metadata } from "next";
import { Inter, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import "./typography.css";
const sans = Inter({ variable: "--font-sans", subsets: ["latin"] });
const serif = Newsreader({ variable: "--font-serif", subsets: ["latin"] });
const mono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["500", "600", "700"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://core-pm-field-course.razii-abrhm.chatgpt.site"),
  title: "CORE / PM — A Self-Paced Product Management Course",
  description: "A self-paced product-management curriculum with 43 lessons across framing, judgment, evidence, strategy, technology, delivery, and leadership.",
  openGraph: { title: "CORE / PM — Re-own the PM Core", description: "Seven phases. Forty-three lessons. One body of product judgment.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "CORE / PM — Re-own the PM Core", description: "Seven phases. Forty-three lessons. One body of product judgment.", images: ["/og.png"] },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>{children}</body></html>; }

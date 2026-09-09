import type { Metadata } from "next";
import "./globals.css";

// Fonts load through a plain stylesheet link rather than next/font, because
// vinext does not emit next/font's CSS here. Without that CSS the --font-*
// variables are undefined, and `font-family: var(--font-sans), …` is then
// invalid at computed-value time — so the whole site silently falls back to
// the browser's default serif. The families and fallbacks live in globals.css.
const FONTS_HREF =
  "https://fonts.googleapis.com/css2" +
  "?family=IBM+Plex+Mono:wght@500;600;700" +
  "&family=IBM+Plex+Sans:wght@400;500;600;700" +
  "&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600" +
  "&display=swap";

export const metadata: Metadata = {
  metadataBase: new URL("https://corepm.raziiabraham.com"),
  title: "CORE / PM — A Self-Paced Product Management Course",
  description: "43 lessons across framing, judgment, evidence, strategy, technology, delivery, and leadership — taught interactively by your coding agent. Install with: npx skills add raziiabraham/core-pm",
  openGraph: { title: "CORE / PM — Re-own the PM Core", description: "Seven phases. Forty-three lessons. One body of product judgment.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "CORE / PM — Re-own the PM Core", description: "Seven phases. Forty-three lessons. One body of product judgment.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href={FONTS_HREF} />
    </head>
    <body>{children}</body>
  </html>;
}

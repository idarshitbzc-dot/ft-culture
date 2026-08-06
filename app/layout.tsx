import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Oswald } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

/**
 * Oswald is the campaign voice: a condensed grotesque that holds
 * its weight at poster scale and still sets clean at 12px, which
 * is what lets one family carry both the hero and the chips.
 */
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Darshit Shah — for Culture Secretary, FT CEPT",
  description:
    "One FT. One Culture. A whole cultural year for the Faculty of Technology — actually planned, actually happening.",
};

export const viewport: Viewport = {
  themeColor: "#08233F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Browser extensions stamp attributes onto <html> (e.g. `webcrx`) before
    // React hydrates, which React reports as a mismatch. Nothing we render
    // here is dynamic, so suppressing it hides only extension noise.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${oswald.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {/* Reveal server-renders its hidden state as an inline style so
            the animation cannot flash. With scripting off nothing ever
            un-hides it and the page would read as blank — this puts it
            back, and costs nothing when scripting is on. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}

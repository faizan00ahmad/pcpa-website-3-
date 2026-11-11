import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IntroVideo } from "@/components/IntroVideo";
import { Motion } from "@/components/Motion";
import { SearchDialog } from "@/components/SearchDialog";
import "./globals.css";
import "./liquid.css";
import "./motion.css";
import "./gallery.css";

// Fonts are bundled in src/fonts, so no network is needed in dev or build.
const inter = localFont({ src: "../fonts/inter-latin.woff2", variable: "--font-inter", display: "swap", weight: "100 900" });
const tight = localFont({ src: "../fonts/inter-tight-latin.woff2", variable: "--font-tight", display: "swap", weight: "100 900" });

export const metadata: Metadata = {
  title: { default: "PCPA – Pakistan Crop Protection Association", template: "%s | PCPA" },
  description: "Pakistan Crop Protection Association – membership, leadership, meetings, elections and downloads.",
};
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e8f1ec" },
    { media: "(prefers-color-scheme: dark)", color: "#e8f1ec" },
  ],
  width: "device-width",
  initialScale: 1,
};

/** Applies the saved light/dark choice before first paint (light is the default, whatever the device setting), and marks JS as available. */
const initScript = `try{var d=document.documentElement,t=localStorage.getItem('pcpa-theme');if(t!=='dark'){t='light'}d.dataset.theme=t;d.classList.add('js')}catch(e){document.documentElement.classList.add('js')}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={`${inter.variable} ${tight.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body>
        <div className="pc-aurora" aria-hidden>
          <i />
          <i />
          <i />
        </div>
        <IntroVideo />
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <SearchDialog />
        <Motion glow />
      </body>
    </html>
  );
}

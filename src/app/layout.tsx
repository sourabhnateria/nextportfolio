import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Terminal from "@/components/terminal/Terminal";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { CommandMenu } from "@/components/ui/CommandMenu";
import SpotlightCursor from "@/components/ui/SpotlightCursor";
import { Dock } from "@/components/ui/Dock";
import { SocialFloater } from "@/components/ui/SocialFloater";
import { MobileMenu } from "@/components/ui/MobileMenu";
import { ThemeProvider } from "@/components/providers/ThemeProvider"; // ← add this
import Script from "next/script";
import "./globals.css";

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sourabh Nateria | Full-Stack Engineer",
  description:
    "Portfolio of Sourabh Nateria - Full-Stack Engineer & Computer Science Graduate. Specializing in Web Development and Generative AI.",
  metadataBase: new URL("https://sourabhnateria.vercel.app"), // ← fixed
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sourabh Nateria | Full-Stack Engineer",
    description:
      "Portfolio of Sourabh Nateria - Full-Stack Engineer & Computer Science Graduate. Specializing in Web Development and Generative AI.",
    type: "website",
    url: "https://sourabhnateria.vercel.app",
    siteName: "Sourabh Nateria",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/web-app-manifest-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/web-app-manifest-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/web-app-manifest-512x512.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${sans.variable} ${mono.variable} antialiased bg-slate-950 text-slate-50 font-sans relative`}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sourabh Nateria",
              url: "https://sourabhnateria.vercel.app",
              jobTitle: "Full-Stack Engineer",
              sameAs: [
                "https://github.com/sourabhnateria",
                "https://www.linkedin.com/in/sourabhnateria",
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Deep Learning",
                "Computer Vision",
                "Generative AI",
                "Software Engineering",
              ],
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <div className="hidden md:block">
            <SpotlightCursor />
          </div>
          <CommandMenu />
          <ScrollProgress />
          <div className="hidden md:block">
            <Dock />
            <SocialFloater />
          </div>
          <MobileMenu />
          <main className="flex flex-col min-h-screen pb-32">{children}</main>
          <Terminal />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

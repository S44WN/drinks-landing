import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import ViewCanvas from "@/components/ViewCanvas";

const brightMelody = localFont({
  src: "../../public/fonts/bright-melody.woff2",
  variable: "--font-bright-melody",
  display: "swap",
});

const canopee = localFont({
  src: "../../public/fonts/canopee-webfont.woff2",
  variable: "--font-canopee",
  weight: "100 900",
  display: "swap",
});

const montserrat = localFont({
  src: "../../public/fonts/Montserrat-Variable.woff2",
  variable: "--font-montserrat",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drinks Landing",
  description: "Landing page for drinks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${brightMelody.variable} ${montserrat.variable} ${canopee.variable} antialiased overflow-x-hidden bg-sky-200 `}
      >
        <Header />
        <main>
          {children}
          <ViewCanvas />
        </main>
      </body>
    </html>
  );
}

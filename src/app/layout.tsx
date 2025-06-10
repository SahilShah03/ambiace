import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Dancing_Script } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Ambiace - Ace up your ambience",
  description: "Premium 3D-printed home décor for style-conscious homeowners",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dancingScript.className}>
      <body className={inter.className}>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}

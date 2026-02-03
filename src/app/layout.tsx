import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CYASH Contracting | Premium Interior Solutions",
  description: "Leading interior service providers in Saudi Arabia, specialized in turn-key Workspace Design and Interior Design Fit-out works.",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import ChatWidget from "@/components/chat/ChatWidget";
import WhatsAppButton from "@/components/chat/WhatsAppButton";

import { SplashScreen } from "@/components/layout/SplashScreen";

import { SplashProvider } from "@/context/SplashContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${playfairDisplay.variable} antialiased`}
      >
        <SplashProvider>
          <SplashScreen />
          <Navbar />
          {children}
          <ChatWidget />
          <WhatsAppButton />
          <Footer />
        </SplashProvider>
      </body>
    </html>
  );
}

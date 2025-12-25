import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Blu Technologies & Innovation | Africa's Frontier for Advanced Technology",
  description: "Building intelligent systems and advanced technology platforms that power Africa's next generation of innovation. AI, Cloud Infrastructure, and Deep-Tech Solutions.",
  keywords: ["Blu Tech", "Africa Technology", "AI", "Cloud Computing", "Deep Tech", "Innovation", "Machine Learning"],
  authors: [{ name: "Blu Technologies & Innovation" }],
  openGraph: {
    title: "Blu Technologies & Innovation",
    description: "Africa's Frontier for Advanced Technology",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

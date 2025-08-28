import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import PageLoader from "@/components/ui/PageLoader";
import WhatsappButton from "@/components/ui/WhatsappButton";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecoagro Gaspar | Soluciones Sustentables para la Sanidad Vegetal",
  description:
    "Más de 60 años desarrollando productos derivados del cobre para el manejo eficiente y amigable con el medio ambiente de enfermedades foliares en cultivos.",
  openGraph: {
    title: "Ecoagro Gaspar | Soluciones Sustentables para la Sanidad Vegetal",
    description:
      "Más de 60 años desarrollando productos derivados del cobre para el manejo eficiente y amigable con el medio ambiente de enfermedades foliares en cultivos.",
    url: "https://ecoagrogaspar.com.ar/",
    siteName: "Ecoagro Gaspar",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecoagro Gaspar | Soluciones Sustentables para la Sanidad Vegetal",
    description:
      "Más de 60 años desarrollando productos derivados del cobre para el manejo eficiente y amigable con el medio ambiente de enfermedades foliares en cultivos.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <body
        className={`${geistMono.variable} font-avenir antialiased overflow-x-hidden`}
      >
        <PageLoader /> 
        <Header />
        {children}
        <WhatsappButton />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
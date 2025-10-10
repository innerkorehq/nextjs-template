import type { Metadata } from "next";
import { SansFont, SerifFont, MonoFont } from "@/lib/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>MarketKore Landing Page Builder</title>
        <meta name="description" content="Dynamic landing page builder for MarketKore" />
      </head>
      <body
        className={`${SansFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

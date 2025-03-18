import type { Metadata } from "next";
import { inter } from "@ui/fonts";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Script from "next/script";
config.autoAddCss = false

export const metadata: Metadata = {
  title: {
    template: "%s | Next Todo",
    default: "Next Todo",
  },
  description: "The todo app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}

        {/* IonIcons */}
        <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" async/>
        <Script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" async/>
      </body>
    </html>
  );
}

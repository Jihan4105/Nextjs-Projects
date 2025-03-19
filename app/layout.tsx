import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import { inter } from "@ui/fonts";

import "./globals.css";
import Script from "next/script";

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
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>

        {/* IonIcons */}
        <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" />
        <Script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" />
      </body>
    </html>
  );
}

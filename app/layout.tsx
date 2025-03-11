import type { Metadata } from "next";
import { inter } from "@ui/fonts";
import "./globals.css";



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
      </body>
    </html>
  );
}

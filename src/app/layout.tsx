//Import the font, global.css for styling
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Declare/Define the font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Declare/Define the font
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Creates a Metadata & exports it for use elsewhere in the application
export const metadata: Metadata = {
  title: "Domain Course 6",
  description: "NextJS Project",
  icons: "/icon/right-arrow.png",
};

// RootLayout component is layout wrapper that takes children as a prop & renders it inside a basic HTML structure
// props allows data to be passed from a parent component to child component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
      >
        {children}
      </body>
    </html>
  );
}

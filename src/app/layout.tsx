import type { Metadata } from "next";
import { ReactNode } from "react";

import localFont from "next/font/local";
import "./globals.css";

import { Toaster } from "react-hot-toast";

import AppClerkProvider from "@/providers/ClerkProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/SideBard";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Socially",
  description: "A modern social media application powered by Next.js",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning={true}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <AppClerkProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="min-h-screen">
                <NavBar />
                <main className="py-8">
                  <div className="mx-auto max-w-7xl px-4">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                      <div className="hidden lg:col-span-3 lg:block">
                        <Sidebar />
                      </div>
                      <div className="lg:col-span-9">{children}</div>
                    </div>
                  </div>
                </main>
              </div>
              <Toaster />
            </ThemeProvider>
          </AppClerkProvider>
        </body>
      </html>
    </>
  );
}

import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import NextAuthSessionProvider from "../../providers/NextAuthSessionProvider";
import ToastProvider from "../../providers/ToastProvider";
import { Providers } from "../../providers/StoreProvider";
import DarkModeProvider from "../../providers/DarkModeProvider";

const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hr Management",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      <body className={inter.className}>
        <DarkModeProvider />
        <ToastProvider />
        <Providers>
          <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </Providers>
      </body>
    </html>
  );
}

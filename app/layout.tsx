import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";
import LocalFont from "next/font/local";

export const metadata: Metadata = {
  title: "Frontend assignment — Sls0n",
  description: "Frontend assignment submitted by Sls0n",
};

const Font = LocalFont({
  src: "../public/fonts/EudoxusSansGX.woff2",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${Font.className} mx-auto max-w-[60rem] px-4 sm:px-6 lg:px-8`}
      >
        <Navbar />

        <main className="pt-[7rem] px-2">{children}</main>
      </body>
    </html>
  );
}

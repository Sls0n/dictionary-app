import Navbar from "@/components/Navbar";
import { DataContextProvider } from "@/context/DataContext";
import LocalFont from "next/font/local";
import type { Metadata } from "next";
import "@/styles/globals.css";

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
        <DataContextProvider>
          <main className="pt-[7rem] px-2">{children}</main>
        </DataContextProvider>
      </body>
    </html>
  );
}

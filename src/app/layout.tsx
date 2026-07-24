import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reliance Petrochem ERP",
  description: "Enterprise Resource Planning for Reliance Petrochem & Pure Petroleum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-slate-50" suppressHydrationWarning>
      <body className={`${inter.className} h-full flex overflow-hidden`} suppressHydrationWarning>
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto bg-slate-50 p-1 sm:p-2">
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}

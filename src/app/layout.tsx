import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { SidebarProvider } from "@/context/SidebarContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Reliance ERP",
  description: "Enterprise Resource Planning for Reliance & Pure Petroleum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-slate-50" suppressHydrationWarning>
      <body className={`${inter.variable} ${inter.className} font-sans h-full flex overflow-hidden`} suppressHydrationWarning>
        <SidebarProvider>
          <Sidebar />
          <div className="flex flex-1 flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-y-auto bg-slate-50 p-1 sm:p-2">
              {children}
            </main>
          </div>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
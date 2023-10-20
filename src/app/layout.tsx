import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard UI",
  description: "Tiims Dashboard Responsive UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased h-screen">
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <main className="h-full flex flex-row">
            <Sidebar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

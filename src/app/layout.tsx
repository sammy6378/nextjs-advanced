
import type { Metadata } from "next";
import { Poppins, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "./themes/themeContext";
import Sidebar from "@/components/Sidebar";
import StoreProvider from "./storeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "Advanced NextJS",
  description: "Learn how to build a fullstack app with NextJS",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full overflow-hidden">
      <body className={`${poppins.variable} ${josefin.variable} antialiased h-full overflow-hidden`}>
        <StoreProvider>
        <ThemeProvider>
          <Navbar />
          <div className="grid grid-cols-12 h-screen">
            {/* Left Sidebar*/}
            <aside className="col-span-2 bg-gray-100 dark:bg-gray-900 p-4 h-screen sticky top-0">
              <Sidebar />
            </aside>

            {/* Main Content */}
            <main className="col-span-7 p-6 h-screen overflow-y-auto scrollbar-hide">
              {children}
            </main>

            {/* Right Panel*/}
            <aside className="col-span-3 p-4 h-screen sticky top-0">
              {/* Right panel content goes here */}
            </aside>
          </div>
        </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}

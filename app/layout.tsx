import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Scroll from "@/components/Scroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foodieland",
  description: "Online food store for nourishing and delicious meals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Scroll />
      <body
        className={`min-h-svh flex flex-col   bg-white w-full items-center ${inter.className}`}
      >
        <Header />
        <main className="  flex-grow w-[95%] max-w-[1200px] justify-center flex flex-col gap-16 my-3 ">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

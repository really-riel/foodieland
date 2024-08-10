import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body
        className={"min-h-svh flex flex-col   bg-white w-full justify-center "}
      >
        <Header />
        <main className="  flex-grow w-full ">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

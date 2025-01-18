import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Web3Modal } from "@/context/web3Modal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BlockGuard",
  description:
    "Ensure trust and transparency in your hackathons and bounties by locking prize funds in smart contracts and automating payouts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${open_sans.className} antialiased`}>
      <Web3Modal>
        <Navbar />
        <div className="px-3 md:px-6 max-w-[1400px] mx-auto">{children}</div>
        <Footer />
        </Web3Modal>
      </body>
    </html>
  );
}

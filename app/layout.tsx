import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsMenuData from "@/components/NewsMenuData.server";

const inter = Inter({ subsets: ["latin"] });
export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: "Mining Discovery",
  description: "Mining Discovery - Your source for mining news and information",
};

// async function getMetalPrices() {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://miningdiscovery.com";
//   const response = await fetch(`${baseUrl}/api/metal-prices`, {
//     next: { revalidate: 86400 } // Cache for 24 hours (86400 seconds)
//   });
//   const { data: prices } = await response.json();
//   return prices;
// }

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const prices = await getMetalPrices();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header  NewsMenu={<NewsMenuData />} />
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"></link>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <Link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          // integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}

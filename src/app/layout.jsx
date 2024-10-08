import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Football Hub",
  description: "All the information that you need to know of your favourite sport in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar">
      <body className={`${inter.className} overflow-x-hidden text-yellow bg-black`}>
        <Header />
        
        {children}
      </body>
    </html>
  );
}

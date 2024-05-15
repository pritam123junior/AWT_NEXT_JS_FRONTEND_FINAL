import { Metadata } from 'next'
import{Inter} from "next/font/google";
import"./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Link from 'next/link';

const inter=Inter({subsets:["latin"]})

export const metadata: Metadata = {
  title: 'Hospital Management System',
  
}
export default function RootLayout({
  children,
}:Readonly< {
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
    <body
        className={`${inter.className} h-screen flex justify-between flex-col`}
    >
        <Header />
        {children}
        <Footer />
    </body>
</html>
  )
}
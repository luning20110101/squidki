import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ReactGA from 'react-ga4';

const inter = Inter({ subsets: ["latin"] })

// 获取环境变量中的 Google Analytics ID
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// 初始化 Google Analytics
/*if (GA_TRACKING_ID) {
  ReactGA.initialize(GA_TRACKING_ID);
}*/

if (process.env.NODE_ENV === 'production' && GA_TRACKING_ID) {
  ReactGA.initialize(GA_TRACKING_ID);
}

export const metadata: Metadata = {
  title: "Squidki - The Ultimate Squidki Experience",
  description: "Welcome to Squidki—where Sprunki's beats meet Squid Game's thrill. Create music, survive deadly challenges, and strategize in a unique rhythm-inspired world.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();

  useEffect(() => {
    // 每次路由变化时发送页面视图事件
    ReactGA.send({ hitType: 'pageview', page: pathname });
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'

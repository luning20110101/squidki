import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Squidki - The Ultimate Squidki Squid Game Experience",
  description: "Welcome to Squidki - the thrilling fusion of Sprunki&#39;s musical creativity and Squid Game survival mechanics. Create beats to survive, compete in deadly musical challenges, and experience a unique blend of rhythm and strategy inspired by the iconic Squid Game series.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
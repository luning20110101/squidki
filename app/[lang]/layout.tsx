import type React from "react"
import "../globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { getDictionary } from "@/lib/dictionary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Traffic Parking Game",
  description: "Play the exciting Traffic Parking Game online!",
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <html lang={lang}>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navbar lang={lang} dict={dict} />
        {children}
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  )
}


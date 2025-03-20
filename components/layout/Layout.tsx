import type React from "react"
import Head from "next/head"
import { Montserrat } from "next/font/google"
import Navbar from "./Navbar"
import Footer from "./Footer"
import WhatsAppButton from "../ui/WhatsAppButton"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  navbarProps?: any
}

export default function Layout({
  children,
  title = "Cabañas del Sol - Complejo turístico en Santa Fe",
  description = "Complejo de cabañas del Sol - Disfruta de la naturaleza y el río en nuestras cabañas en Santa Fe",
  navbarProps = {},
}: LayoutProps) {
  return (
    <div className={`${montserrat.variable} font-sans min-h-screen flex flex-col`}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar {...navbarProps} />

      <main className="flex-grow pt-[104px]">{children}</main>

      <WhatsAppButton />
      <Footer />
    </div>
  )
}


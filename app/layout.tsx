import type React from "react"
import { Montserrat } from "next/font/google"
import "../styles/globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata = {
  title: "Cabañas Del Sol - Complejo turístico en Santa Fe",
  description: "Disfruta de la naturaleza y el río en nuestras cabañas en Santa Fe",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  )
}



import './globals.css'
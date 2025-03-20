"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Menu, X, MapPin, User } from "lucide-react"
// We'll use a text logo instead of an image since the image file is missing
import logo from "../../public/logo2NavBar.png"
import Image from "next/image"
// import ThemeToggle from "../theme-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 100, // Ajuste para el navbar fijo
        behavior: "smooth",
      })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      {/* Top bar with location and user links */}
      <div className="bg-[#F1B140] text-white py-1 px-4 text-xs">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <MapPin size={14} className="mr-1" />
            <span>Arroyo Leyes, Santa Fe. Ruta 1, km 22</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/precios" className="hover:underline">
              Precios
            </Link>
            <button onClick={() => scrollToSection("contacto")} className="hover:underline">
              Ayuda
            </button>
            {/* <Link href="#" className="flex items-center hover:underline">
              <User size={14} className="mr-1" />
              <span>Mi cuenta</span>
            </Link> */}
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white py-2 px-8">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Logo" width={300} height={300} />
            <div className="flex items-center">
              <button className="mr-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </Link>

          {/* Search bar */}
          {/* <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar cabañas, servicios..."
                className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1B140]"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div> */}

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
          {/* DarkMode  */}

          {/* <ThemeToggle /> */}
          
            <button
              onClick={() => scrollToSection("cabanas")}
              className="text-gray-700 hover:text-[#F1B140] font-medium"
            >
              Cabañas
            </button>
            <Link href="/precios" className="text-gray-700 hover:text-[#F1B140] font-medium">
              Precios
            </Link>
            <button
              onClick={() => scrollToSection("complejo")}
              className="text-gray-700 hover:text-[#F1B140] font-medium"
            >
              Complejo
            </button>
            <button
              onClick={() => scrollToSection("comentarios")}
              className="text-gray-700 hover:text-[#F1B140] font-medium"
            >
              Comentarios
            </button>
            <button
              onClick={() => scrollToSection("ubicacion")}
              className="text-gray-700 hover:text-[#F1B140] font-medium"
            >
              Ubicación
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-gray-700 hover:text-[#F1B140] font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile search button */}
          {/* <div className="md:hidden">
            <button className="p-2">
              <Search size={20} />
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto py-2 px-4">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("cabanas")}
                className="py-2 text-gray-700 hover:text-[#F1B140] font-medium border-b border-gray-100"
              >
                Cabañas
              </button>
              <Link
                href="/precios"
                className="py-2 text-gray-700 hover:text-[#F1B140] font-medium border-b border-gray-100 flex items-center justify-center" // Agrega flex items-center justify-center
                onClick={() => setIsMenuOpen(false)}
              >
                Precios
              </Link>

              <button
                onClick={() => scrollToSection("complejo")}
                className="py-2 text-gray-700 hover:text-[#F1B140] font-medium border-b border-gray-100"
              >
                Complejo
              </button>
              <button
                onClick={() => scrollToSection("comentarios")}
                className="py-2 text-gray-700 hover:text-[#F1B140] font-medium border-b border-gray-100"
              >
                Comentarios
              </button>
              <button
                onClick={() => scrollToSection("ubicacion")}
                className="py-2 text-gray-700 hover:text-[#F1B140] font-medium border-b border-gray-100"
              >
                Ubicación
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="py-2 text-gray-700 hover:text-[#F1B140] font-medium"
              >
                Contacto
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}


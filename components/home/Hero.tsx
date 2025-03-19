"use client"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 100, // Ajuste para el navbar fijo
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center">
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover">
          <source src="/videos/promocioncab.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Vení a disfrutar a nuestro complejo
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Cabañas del Sol te ofrece una experiencia única en contacto con la naturaleza, a orillas del río en Santa Fe.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => scrollToSection("cabanas")}
            className="bg-[#F1B140] hover:bg-[#e09c20] text-white font-medium px-8 py-3 rounded-md transition-colors duration-300 flex items-center"
          >
            Ver Cabañas
            <ChevronDown className="ml-2" size={20} />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("cabanas")}
          className="text-white opacity-80 hover:opacity-100 transition-opacity"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
}


"use client"

import type React from "react"
import dynamic from "next/dynamic"
import { Play } from "lucide-react"
import "react-responsive-carousel/lib/styles/carousel.min.css"

// Importación dinámica para evitar problemas de SSR
const ReactCarousel = dynamic(() => import("react-responsive-carousel").then((mod) => mod.Carousel), { ssr: false })

interface CustomCarouselProps {
  cabins: string[]
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ cabins }) => {
  if (!cabins || cabins.length === 0) {
    return (
      <div className="bg-gray-200 rounded-lg flex items-center justify-center h-[400px]">
        <p className="text-gray-500">No hay imágenes disponibles</p>
      </div>
    )
  }

  return (
    <div className="rounded-lg overflow-hidden">
      <ReactCarousel
        showArrows={true}
        showStatus={false}
        showThumbs={true}
        infiniteLoop={true}
        autoPlay={false}
        emulateTouch={true}
        thumbWidth={80}
        className="custom-carousel"
      >
        {cabins.map((item, index) => (
          <div key={index} className="carousel-slide">
            {item.endsWith(".mp4") ? (
              <div className="relative aspect-video">
                <video
                  src={item}
                  controls
                  autoPlay={index === 0}
                  loop
                  muted
                  className="w-full h-full object-contain max-h-[500px] rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-black bg-opacity-50 rounded-full p-4">
                    <Play size={32} className="text-white" />
                  </div>
                </div>
              </div>
            ) : (
              <img
                src={item || "/placeholder.svg?height=500&width=800"}
                alt={`Imagen ${index + 1}`}
                className="w-full object-contain max-h-[500px] rounded-lg"
              />
            )}
          </div>
        ))}
      </ReactCarousel>
    </div>
  )
}

export default CustomCarousel


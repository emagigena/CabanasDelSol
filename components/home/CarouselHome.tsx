"use client"
import Image from "next/image"
import dynamic from "next/dynamic"
import itemData from "../../data/itemData.json"

// Importación dinámica para evitar problemas de SSR
const ReactCarousel = dynamic(() => import("react-responsive-carousel").then((mod) => mod.Carousel), { ssr: false })

import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function CarouselHome() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <ReactCarousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        emulateTouch={true}
        className="custom-carousel"
      >
        {itemData.map((item) => (
          <div key={item.id} className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={item.img || "/placeholder.svg?height=500&width=800"}
              alt={`Imagen del complejo ${item.id}`}
              width={800}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </ReactCarousel>
    </div>
  )
}


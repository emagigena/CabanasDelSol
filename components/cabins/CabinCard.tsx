"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Users, Star, Thermometer, Car, Tag } from "lucide-react"
import ReservationModal from "./ReservationModal"

interface CabinCardProps {
  cabin: any
}

export default function CabinCard({ cabin }: CabinCardProps) {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      {/* <Link href={`/products/${cabin.id}`} className="block"> */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {Array.isArray(cabin.image) && cabin.image.length > 0 && (
            <Image
              src={cabin.image[1] || "/placeholder.svg?height=300&width=400"}
              alt={cabin.name}
              fill
              className={`object-cover transition-all duration-500 ${
                isLoading ? "scale-110 blur-sm" : "scale-100 blur-0"
              }`}
              onLoadingComplete={() => setLoading(false)}
            />
          )}

          {/* Capacity badge */}
          <div className="absolute top-3 left-3 bg-white/90 rounded-full px-2 py-1 text-sm font-medium text-gray-700 flex items-center">
            <Users size={16} className="mr-1 text-[#F1B140]" />
            <span>{cabin.maxCapacity} personas</span>
          </div>

          {/* Discount badge */}
          <div className="absolute top-3 right-3 bg-[#F1B140] text-white px-3 py-1 rounded-md text-sm font-bold">
            <Tag size={14} className="inline mr-1" />
            ¡Descuentos por temporada!
          </div>
        </div>
      {/* </Link> */}

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{cabin.name}</h3>
          <div className="flex items-center text-sm">
            <Star size={16} className="text-yellow-500 mr-1" />
            <span className="font-medium">4.8</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{cabin.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
            <Thermometer size={14} className="mr-1" /> A/C
          </span>
          <span className="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
            <Car size={14} className="mr-1" /> Cochera
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Desde</p>
            <p className="text-xl font-bold text-[#F1B140]">$ {cabin.price}</p>
            <p className="text-xs text-gray-500">por noche para {cabin.maxCapacity} personas</p>
          </div>
          <ReservationModal cabin={cabin} />
        </div>
      </div>
    </div>
  )
}


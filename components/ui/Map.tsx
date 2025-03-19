import Image from "next/image"
import { MapPin, ExternalLink } from "lucide-react"
import mapsImage from "../../data/images/maps.png"

export default function Map() {
  return (
    <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
      <a
        href="https://www.google.com/maps/place/Cabañas+Del+Sol/@-31.5081366,-60.4534622,16z/data=!4m6!3m5!1s0x95b4556577844b6b:0x766feb8921fe8f47!8m2!3d-31.5088775!4d-60.4546853!16s%2Fg%2F11c5zscgxr?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-[16/9] hover:opacity-95 transition-opacity"
      >
        <Image src={mapsImage} alt="Mapa de ubicación" fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center">
          <div className="bg-white rounded-lg shadow-md px-4 py-2 flex items-center">
            <MapPin size={18} className="text-[#F1B140] mr-2" />
            <span className="font-medium text-gray-800">Ruta 1, km 22. Arroyo Leyes, Santa Fe</span>
          </div>
          <div className="mt-3 bg-[#F1B140] text-white px-3 py-1.5 rounded-md flex items-center text-sm font-medium">
            <span>Ver en Google Maps</span>
            <ExternalLink size={14} className="ml-1.5" />
          </div>
        </div>
      </a>
    </div>
  )
}


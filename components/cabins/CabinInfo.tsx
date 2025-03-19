import { Users, BedDouble, Bath, Utensils, Tv } from "lucide-react"
import DropdownInfo from "./DropdownInfo"

interface CabinInfoProps {
  cabanas: any
}

export default function CabinInfo({ cabanas }: CabinInfoProps) {
  if (!cabanas) return null

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900">{cabanas.name}</h2>
        <div className="flex items-center bg-[#F1B140]/10 text-[#F1B140] px-3 py-1 rounded-full">
          <Users size={18} className="mr-1" />
          <span className="font-medium">{cabanas.maxCapacity} personas</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {cabanas.distribucion?.some((item) => item.includes("Dormitorio")) && (
          <div className="flex flex-col items-center justify-center bg-gray-100 p-3 rounded-lg">
            <BedDouble size={24} className="mb-1 text-gray-700" />
            <span className="text-sm text-center text-gray-700">
              {cabanas.distribucion
                .find((item) => item.includes("Dormitorio"))
                ?.replace("Dormitorios", "")
                .replace("Dormitorio", "")
                .trim() || "2"}{" "}
              Dormitorios
            </span>
          </div>
        )}
        {cabanas.distribucion?.some((item) => item.includes("Baño")) && (
          <div className="flex flex-col items-center justify-center bg-gray-100 p-3 rounded-lg">
            <Bath size={24} className="mb-1 text-gray-700" />
            <span className="text-sm text-center text-gray-700">
              {cabanas.distribucion.filter((item) => item.includes("Baño")).length} Baño(s)
            </span>
          </div>
        )}
        {cabanas.equipamiento?.some((item) => item.toLowerCase().includes("cocina")) && (
          <div className="flex flex-col items-center justify-center bg-gray-100 p-3 rounded-lg">
            <Utensils size={24} className="mb-1 text-gray-700" />
            <span className="text-sm text-center text-gray-700">Cocina equipada</span>
          </div>
        )}
        {cabanas.equipamiento?.some((item) => item.includes("TV")) && (
          <div className="flex flex-col items-center justify-center bg-gray-100 p-3 rounded-lg">
            <Tv size={24} className="mb-1 text-gray-700" />
            <span className="text-sm text-center text-gray-700">TV</span>
          </div>
        )}
      </div>

      <div className="mb-6">
        <h3 className="font-bold text-gray-800 mb-2">Descripción</h3>
        <p className="text-gray-600">{cabanas.description}</p>
      </div>

      <DropdownInfo cabanas={cabanas} />
    </div>
  )
}


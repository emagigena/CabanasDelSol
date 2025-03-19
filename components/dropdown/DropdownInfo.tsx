import { ChevronDown, BedDouble, Tv, Utensils, Thermometer, Car } from "lucide-react"

interface DropdownInfoProps {
  cabanas: any
}

export default function DropdownInfo({ cabanas }: DropdownInfoProps) {
  if (!cabanas) return null

  return (
    <div className="space-y-4">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer bg-gray-50 px-4 py-3">
            <h3 className="font-semibold text-gray-800">Distribución</h3>
            <ChevronDown
              size={20}
              className="text-gray-500 transition-transform duration-300 ease-in-out group-open:rotate-180"
            />
          </summary>
          <div className="px-4 py-3 border-t border-gray-200 animate-accordion-down">
            <ul className="space-y-2">
              {cabanas.distribucion?.map((item: string, index: number) => (
                <li key={index} className="flex items-center text-gray-600">
                  <BedDouble size={16} className="mr-2 text-[#F1B140]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer bg-gray-50 px-4 py-3">
            <h3 className="font-semibold text-gray-800">Equipamiento</h3>
            <ChevronDown
              size={20}
              className="text-gray-500 transition-transform duration-300 ease-in-out group-open:rotate-180"
            />
          </summary>
          <div className="px-4 py-3 border-t border-gray-200 animate-accordion-down">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cabanas.equipamiento?.map((item: string, index: number) => {
                let icon = <Utensils size={16} className="mr-2 text-[#F1B140]" />

                if (item.toLowerCase().includes("tv")) {
                  icon = <Tv size={16} className="mr-2 text-[#F1B140]" />
                } else if (item.toLowerCase().includes("aire")) {
                  icon = <Thermometer size={16} className="mr-2 text-[#F1B140]" />
                } else if (item.toLowerCase().includes("cochera")) {
                  icon = <Car size={16} className="mr-2 text-[#F1B140]" />
                }

                return (
                  <li key={index} className="flex items-center text-gray-600">
                    {icon}
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        </details>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer bg-gray-50 px-4 py-3">
            <h3 className="font-semibold text-gray-800">Servicios</h3>
            <ChevronDown
              size={20}
              className="text-gray-500 transition-transform duration-300 ease-in-out group-open:rotate-180"
            />
          </summary>
          <div className="px-4 py-3 border-t border-gray-200 animate-accordion-down">
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <Thermometer size={16} className="mr-2 text-[#F1B140]" />
                Ambiente Climatizado
              </li>
              <li className="flex items-center text-gray-600">
                <Utensils size={16} className="mr-2 text-[#F1B140]" />
                Desayuno seco
              </li>
              <li className="flex items-center text-gray-600">
                <Utensils size={16} className="mr-2 text-[#F1B140]" />
                Reserva de quincho comunitario para realizar festejos
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  )
}


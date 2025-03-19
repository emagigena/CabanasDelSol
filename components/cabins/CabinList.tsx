"use client"

import { useState } from "react"
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react"
import CabinCard from "./CabinCard"

interface CabinListProps {
  cabins: any[]
}

export default function CabinList({ cabins }: CabinListProps) {
  const [showFilters, setShowFilters] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [capacityFilter, setCapacityFilter] = useState<number | null>(null)

  const toggleFilters = () => setShowFilters(!showFilters)
  const toggleShowMore = () => setShowMore(!showMore)

  const filteredCabins = cabins.filter((cabin) => {
    // Filter by search term
    const matchesSearch =
      cabin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cabin.description.toLowerCase().includes(searchTerm.toLowerCase())

    // Filter by capacity
    const matchesCapacity = capacityFilter ? cabin.maxCapacity >= capacityFilter : true

    return matchesSearch && matchesCapacity
  })

  const displayedCabins = showMore ? filteredCabins : filteredCabins.slice(0, 3)

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Nuestras Cabañas</h2>

          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar cabañas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1B140] focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>

            <button
              onClick={toggleFilters}
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <SlidersHorizontal size={18} className="mr-2" />
              Filtros
              <ChevronDown size={16} className={`ml-2 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Capacidad mínima</label>
                <select
                  value={capacityFilter || ""}
                  onChange={(e) => setCapacityFilter(e.target.value ? Number(e.target.value) : null)}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#F1B140] focus:border-transparent"
                >
                  <option value="">Todas las capacidades</option>
                  <option value="2">2 personas o más</option>
                  <option value="4">4 personas o más</option>
                  <option value="6">6 personas o más</option>
                  <option value="8">8 personas o más</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {filteredCabins.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron cabañas que coincidan con tu búsqueda.</p>
          </div>
        ) : (
          <>
            <div className="hidden md:block">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCabins.map((cabin) => (
                  <CabinCard key={cabin.id} cabin={cabin} />
                ))}
              </div>
            </div>

            <div className="block md:hidden">
              <div className="space-y-6">
                {displayedCabins.map((cabin) => (
                  <CabinCard key={cabin.id} cabin={cabin} />
                ))}
              </div>

              {!showMore && filteredCabins.length > 3 && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={toggleShowMore}
                    className="bg-white border border-[#F1B140] text-[#F1B140] hover:bg-[#F1B140] hover:text-white font-medium px-6 py-2 rounded-md transition-colors duration-300"
                  >
                    Ver más cabañas
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}


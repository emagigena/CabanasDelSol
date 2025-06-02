"use client"

import { useState } from "react"
import { X, Calendar, Info } from "lucide-react"
import CabinInfo from "./CabinInfo"
import CustomCarousel from "../ui/Carousel"
import ContactForm from "../forms/ContactForm"
import Map from "../ui/Map"

interface ReservationModalProps {
  cabin: any
}

export default function ReservationModal({ cabin }: ReservationModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <button
        onClick={openModal}
        className="bg-[#F1B140] hover:bg-[#e09c20] text-white font-medium px-4 py-2 rounded transition-colors duration-300"
      >
        Conocela Aquí
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              onClick={closeModal}
              aria-hidden="true"
            ></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div className="inline-block w-full max-w-6xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg sm:align-middle">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{cabin.name}</h3>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-500">
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <CustomCarousel cabins={cabin.image} />
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <Info size={18} className="mr-2 text-[#F1B140]" />
                      Ubicación
                    </h4>
                    <Map />
                  </div>
                </div>

                <div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <CabinInfo cabanas={cabin} />
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                      <Calendar size={18} className="mr-2 text-[#F1B140]" />
                      Reservar
                    </h4>
                    <ContactForm cabinID={cabin.id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}


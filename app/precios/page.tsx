import Link from "next/link"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import PriceTable from "@/components/pricing/PriceTable"
import ContactForm from "@/components/forms/ContactForm"
import { ArrowLeft, Info } from "lucide-react"

export const metadata = {
  title: "Precios - Cabañas del Sol",
  description: "Consulta nuestras tarifas y promociones para tu estadía en Cabañas del Sol",
}

export default function PreciosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[104px]">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-[#F1B140]">
              <ArrowLeft size={18} className="mr-1" />
              <span>Volver al Inicio</span>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-10">
            <div className="flex items-start">
              <Info size={20} className="text-[#F1B140] mr-3 mt-1 flex-shrink-0" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-3">Información sobre nuestras tarifas</h1>
                <p className="text-gray-600 mb-4">Todas nuestras cabañas incluyen:</p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
                  <li>Calefacción</li>
                  <li>TV con DirecTV</li>
                  <li>Ropa de cama</li>
                  <li>Vajillas</li>
                  <li>Quincho con asador</li>
                  <li>Cochera</li>
                </ul>
                <p className="text-gray-600">
                  El aire acondicionado tiene un costo adicional por KW (tiene un medidor de consumo).
                </p>
                <p className="text-gray-600 mt-2">Lo único que NO incluyen las cabañas son toallas y toallones.</p>
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                  <p className="text-sm text-yellow-800">
                    <strong>Nota:</strong> Las visitas a pasar el día tienen un costo de $8000 por persona, a partir de
                    los 3 años.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <PriceTable />

          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">¿CÓMO RESERVAR?</h2>
              <p className="text-gray-600 text-center mb-6">
                La reserva se la tomamos vía telefónica o por WhatsApp. Estamos trabajando con una seña del 50% al
                momento de reservar por banco, y el resto se abona antes de ingresar al complejo por banco/mercadopago o
                en el complejo mismo.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}


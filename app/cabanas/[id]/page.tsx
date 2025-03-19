import Link from "next/link"
import { notFound } from "next/navigation"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CabinInfo from "@/components/cabins/CabinInfo"
import CustomCarousel from "@/components/ui/Carousel"
import ContactForm from "@/components/forms/ContactForm"
import Map from "@/components/ui/Map"
import { ArrowLeft, Tag, Calendar, Users } from "lucide-react"
import cabanas from "@/data/cabins.json"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const cabin = cabanas.find((cabin) => cabin.id.toString() === params.id)

  if (!cabin) {
    return {
      title: "Cabaña no encontrada - Cabañas del Sol",
    }
  }

  return {
    title: `${cabin.name} - Cabañas del Sol`,
    description: cabin.description,
  }
}

export async function generateStaticParams() {
  return cabanas.map((cabin) => ({
    id: cabin.id.toString(),
  }))
}

export default function CabinPage({ params }: { params: { id: string } }) {
  const cabin = cabanas.find((cabin) => cabin.id.toString() === params.id)

  if (!cabin) {
    notFound()
  }

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <CustomCarousel cabins={cabin.image} />
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ubicación</h3>
                <Map />
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-2xl font-bold text-gray-900">{cabin.name}</h1>
                  <div className="bg-[#F1B140] text-white px-3 py-1 rounded-md text-sm font-bold">
                    <Tag size={14} className="inline mr-1" />
                    10% OFF días de semana
                  </div>
                </div>

                <CabinInfo cabanas={cabin} />
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Calendar size={20} className="mr-2 text-[#F1B140]" />
                  Consultar disponibilidad
                </h3>

                <div className="flex items-center mb-6 p-3 bg-gray-50 rounded-md">
                  <Users size={20} className="text-[#F1B140] mr-2" />
                  <p className="text-gray-700">
                    <span className="font-medium">Capacidad máxima:</span> {cabin.maxCapacity} personas
                  </p>
                </div>

                <ContactForm cabinID={cabin.id} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}


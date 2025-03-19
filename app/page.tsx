import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import WhatsAppButton from "@/components/ui/WhatsAppButton"
import Hero from "@/components/home/Hero"
import CabinList from "@/components/cabins/CabinList"
import CarouselHome from "@/components/home/CarouselHome"
import ReviewList from "@/components/reviews/ReviewList"
import Map from "@/components/ui/Map"
import ContactForm from "@/components/forms/ContactForm"
import cabanas from "@/data/cabins.json"
import { MapPin, Phone, Mail, Users } from "lucide-react"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="cabanas" className="scroll-mt-24">
          <CabinList cabins={cabanas} />
        </section>

        <section id="complejo" className="scroll-mt-24 bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">NUESTRO COMPLEJO</h2>
            <CarouselHome />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#F1B140]/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin size={24} className="text-[#F1B140]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ubicación Privilegiada</h3>
                <p className="text-gray-600">
                  Nuestro complejo está ubicado sobre el río, en Arroyo Leyes, Santa Fe. A solo 25 km de la capital.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#F1B140]/10 rounded-full flex items-center justify-center mb-4">
                  <Users size={24} className="text-[#F1B140]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Comodidades</h3>
                <p className="text-gray-600">
                  Todas las cabañas incluyen calefacción, TV con DirecTV, ropa de cama, vajillas, quincho con asador y
                  cochera.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#F1B140]/10 rounded-full flex items-center justify-center mb-4">
                  <Phone size={24} className="text-[#F1B140]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reservas Fáciles</h3>
                <p className="text-gray-600">
                  Reserva vía telefónica o WhatsApp con una seña del 50%. El resto se abona antes de ingresar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="comentarios" className="scroll-mt-24">
          <ReviewList />
        </section>

        <section id="ubicacion" className="scroll-mt-24 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">NUESTRA UBICACIÓN</h2>
            <div className="max-w-4xl mx-auto">
              <Map />

              <div className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Cómo Llegar</h3>
                <p className="text-gray-600 mb-4">
                  Nuestro complejo está ubicado sobre el río, en Arroyo Leyes, Santa Fe. Ruta 1, km 22. Yendo para el
                  norte, es pasando el primer puente de hierro 300 metros a mano derecha, (la segunda bajada). A 25
                  kilómetros de la capital.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-start">
                    <MapPin size={20} className="text-[#F1B140] mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Dirección</h4>
                      <p className="text-sm text-gray-600">Ruta 1, km 22. Arroyo Leyes, Santa Fe.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone size={20} className="text-[#F1B140] mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Teléfono</h4>
                      <p className="text-sm text-gray-600">342-405-5811</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail size={20} className="text-[#F1B140] mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-sm text-gray-600">info@cabanasdelsol.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="scroll-mt-24 py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">CONTACTÁ CON NOSOTROS</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-center text-gray-600 mb-6">
                  Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}


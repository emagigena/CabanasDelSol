import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import logo2 from "../../public/logo2.png"
import mapsImage from "../../data/images/maps.png"


export default function Footer() {
  const message = encodeURIComponent("¡Hola! Me interesa obtener más información para poder hospedarme en una cabaña.")

  return (
    <footer className="bg-[#F1B140] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <div className="flex mr-3 bg-white rounded-full p-1">
                <Image width={40} height={40} src={logo2 || "/placeholder.svg"} alt="Cabañas Del Sol Logo" />
              </div>
              <h3 className="text-xl font-bold">Cabañas Del Sol</h3>
            </Link>
            <p className="text-sm mb-4">
              Disfruta de la naturaleza y el río en nuestro complejo de cabañas ubicado en Arroyo Leyes, Santa Fe.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/complejodelsol"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/complejodelsol_santafe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`https://wa.me/3424055811?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/precios/precios" className="hover:underline">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/#cabanas" className="hover:underline">
                  Cabañas
                </Link>
              </li>
              <li>
                <Link href="/#complejo" className="hover:underline">
                  Complejo
                </Link>
              </li>
              <li>
                <Link href="/#comentarios" className="hover:underline">
                  Comentarios
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>Ruta 1, km 22. Arroyo Leyes, Santa Fe.</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>342-405-5811</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@cabanasdelsol.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4">Ubicación</h4>
            <a
              href="https://www.google.com/maps/place/Cabañas+Del+Sol/@-31.5088775,-60.4546853,15z/data=!4m2!3m1!1s0x0:0x766feb8921fe8f47?sa=X&ved=2ahUKEwiY8PXMmq3_AhWuvJUCHfnxAP4Q_BJ6BAhuEAk"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-opacity"
            >
              <div className="relative h-40 w-full rounded-lg overflow-hidden">
                <Image src={mapsImage} alt="Mapa de ubicación" fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 text-black px-2 py-1 rounded flex items-center text-sm">
                    <span>Ver en Google Maps</span>
                    <ExternalLink size={14} className="ml-1" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Cabañas Del Sol. Todos los derechos reservados.</p>
          <p className="mt-1">Desarrollado por Emanuel Gigena</p>
        </div>
      </div>
    </footer>
  )
}


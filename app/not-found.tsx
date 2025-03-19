import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-[#F1B140]">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mt-4">Página no encontrada</h2>
        <p className="mt-2 text-gray-600">Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
        <div className="mt-6">
          <Link href="/" className="inline-flex items-center text-[#F1B140] hover:text-[#e09c20] font-medium">
            <ArrowLeft size={18} className="mr-1" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </div>
    </div>
  )
}


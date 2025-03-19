import Image from "next/image"
import { Star, Quote } from "lucide-react"
import reviews from "../../data/reviews.json"

export default function ReviewList() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">COMENTARIOS DE NUESTROS HUÉSPEDES</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre lo que opinan quienes ya disfrutaron de nuestras cabañas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                  <Image
                    src={review.image || "/placeholder.svg?height=48&width=48"}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <div className="flex items-center">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-current" />
                    ))}
                    {Array.from({ length: 5 - review.stars }).map((_, i) => (
                      <Star key={i} size={14} className="text-gray-300" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote size={24} className="absolute -top-2 -left-1 text-gray-200 opacity-50" />
                <p className="text-gray-600 text-sm pl-5 relative z-10">{review.comment}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-xs text-gray-500">Reseña de Google</span>
                </div>
                <span className="text-xs text-gray-400">Verificado</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/Cabañas+Del+Sol/@-31.5088775,-60.4546853,15z/data=!4m2!3m1!1s0x0:0x766feb8921fe8f47?sa=X&ved=2ahUKEwiY8PXMmq3_AhWuvJUCHfnxAP4Q_BJ6BAhuEAk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#F1B140] hover:text-[#e09c20] font-medium"
          >
            <span>Ver todas las reseñas en Google</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}


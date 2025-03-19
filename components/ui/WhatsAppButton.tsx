import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const message = encodeURIComponent("¡Hola! Me interesa obtener más información para poder hospedarme en una cabaña.")

  return (
    <a
      href={`https://wa.me/3424055811?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}


"use client"
import { MessageCircle } from "lucide-react"

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Lógica para abrir WhatsApp en una nueva ventana o redirigir al usuario a tu número de WhatsApp
    // Puedes utilizar la API de WhatsApp para generar el enlace adecuado con tu número y un mensaje predefinido
    // Por ejemplo: `https://wa.me/1234567890?text=¡Hola!`
  }

  return (
    <div className="whatsapp-button">
      {/* <button onClick={handleWhatsAppClick}> */}
      <div className="bg-[#25D366] text-white p-4 rounded-full">
        <MessageCircle size={28} />
      </div>
      {/* </button> */}
    </div>
  )
}

export default WhatsAppButton


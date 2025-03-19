"use client"

import { useEffect, useState } from "react"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Verificar si el usuario ya aceptó las cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted")
    if (cookiesAccepted !== "true") {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setShowBanner(false)
  }

  const handleRejectCookies = () => {
    localStorage.setItem("cookiesAccepted", "false")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-lg bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      <div className="p-4">
        <p className="text-gray-700 mb-4">
          Este sitio web utiliza cookies para ofrecerte una mejor experiencia de usuario.
        </p>
        <div className="flex flex-col sm:flex-row justify-end gap-2">
          <button
            onClick={handleRejectCookies}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
          >
            Rechazar cookies
          </button>
          <button
            onClick={handleAcceptCookies}
            className="px-4 py-2 bg-[#F1B140] text-white rounded hover:bg-[#e09c20] transition-colors"
          >
            Aceptar cookies
          </button>
        </div>
      </div>
    </div>
  )
}


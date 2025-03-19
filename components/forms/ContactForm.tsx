"use client"

import type React from "react"
import { useState } from "react"
import { Calendar, User, Phone, Users } from "lucide-react"

interface ContactFormProps {
  cabinID?: string | number
}

export default function ContactForm({ cabinID }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    telefono: "",
    numberOfPeople: "",
    checkInDate: "",
    checkOutDate: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "El apellido es requerido"
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido"
    } else if (!/^\d+$/.test(formData.telefono)) {
      newErrors.telefono = "Ingrese solo números"
    }

    if (!formData.numberOfPeople.trim()) {
      newErrors.numberOfPeople = "La cantidad de personas es requerida"
    } else if (!/^\d+$/.test(formData.numberOfPeople)) {
      newErrors.numberOfPeople = "Ingrese solo números"
    }

    if (!formData.checkInDate) {
      newErrors.checkInDate = "La fecha de ingreso es requerida"
    }

    if (!formData.checkOutDate) {
      newErrors.checkOutDate = "La fecha de egreso es requerida"
    } else if (formData.checkInDate && new Date(formData.checkOutDate) <= new Date(formData.checkInDate)) {
      newErrors.checkOutDate = "La fecha de egreso debe ser posterior a la de ingreso"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (!validate()) return

    const { name, lastName, telefono, numberOfPeople, checkInDate, checkOutDate } = formData

    const message = `Hola, Me gustaría recibir más información para reservar ${cabinID ? `la cabaña ${cabinID}` : "una cabaña"}. Mis datos son:
      Nombre: ${name} ${lastName}
      Teléfono: ${telefono}
      Cantidad de personas: ${numberOfPeople}
      Fecha de ingreso: ${checkInDate}
      Fecha de egreso: ${checkOutDate}`

    const url = `https://wa.me/3424055811?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`pl-10 w-full rounded-md border ${errors.name ? "border-red-300" : "border-gray-300"} py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#F1B140] focus:border-transparent`}
              placeholder="Tu nombre"
            />
          </div>
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`pl-10 w-full rounded-md border ${errors.lastName ? "border-red-300" : "border-gray-300"} py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#F1B140] focus:border-transparent`}
              placeholder="Tu apellido"
            />
          </div>
          {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone size={18} className="text-gray-400" />
            </div>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className={`pl-10 w-full rounded-md border ${errors.telefono ? "border-red-300" : "border-gray-300"} py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#F1B140] focus:border-transparent`}
              placeholder="Tu número de teléfono"
            />
          </div>
          {errors.telefono && <p className="mt-1 text-sm text-red-600">{errors.telefono}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Cantidad de personas</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users size={18} className="text-gray-400" />
            </div>
            <input
              type="number"
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleChange}
              min="1"
              className={`pl-10 w-full rounded-md border ${errors.numberOfPeople ? "border-red-300" : "border-gray-300"} py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#F1B140] focus:border-transparent`}
              placeholder="Número de huéspedes"
            />
          </div>
          {errors.numberOfPeople && <p className="mt-1 text-sm text-red-600">{errors.numberOfPeople}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de ingreso</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar size={18} className="text-gray-400" />
            </div>
            <input
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              className={`pl-10 w-full rounded-md border ${errors.checkInDate ? "border-red-300" : "border-gray-300"} py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#F1B140] focus:border-transparent`}
            />
          </div>
          {errors.checkInDate && <p className="mt-1 text-sm text-red-600">{errors.checkInDate}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de egreso</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar size={18} className="text-gray-400" />
            </div>
            <input
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              className={`pl-10 w-full rounded-md border ${errors.checkOutDate ? "border-red-300" : "border-gray-300"} py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#F1B140] focus:border-transparent`}
            />
          </div>
          {errors.checkOutDate && <p className="mt-1 text-sm text-red-600">{errors.checkOutDate}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#F1B140] hover:bg-[#e09c20] text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
      >
        Enviar consulta por WhatsApp
      </button>
    </form>
  )
}


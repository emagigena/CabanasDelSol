import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import cabinsData from "../data/cabins.json";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GarageIcon from "@mui/icons-material/Garage";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductCard({ product }) {
  const [isLoading, setLoading] = useState(true);
  const [availability, setAvailability] = useState("");

  const handleAvailabilityCheck = (event) => {
    event.preventDefault();

    const checkInDate = event.target.elements.checkInDate.value;

    // Verificar la disponibilidad en el archivo JSON
    const cabin = cabinsData.find((cabin) => cabin.id === product.id);
    if (cabin) {
      const isAvailable = cabin.availability.some((booking) => {
        const bookingStartDate = new Date(booking.checkInDate);
        const bookingEndDate = new Date(booking.checkOutDate);
        const selectedDate = new Date(checkInDate);

        return (
          selectedDate >= bookingStartDate && selectedDate <= bookingEndDate
        );
      });

      if (isAvailable) {
        setAvailability("Available");
      } else {
        setAvailability("Not Available");

        // Realizar la reserva y actualizar el archivo JSON
        updateCabinAvailability(product.id, checkInDate, "fecha de check-out");
      }
    }
  };

  function updateCabinAvailability(cabinId, checkInDate, checkOutDate) {
    // Encuentra la cabaña correspondiente en el archivo JSON
    const cabin = cabinsData.find((cabin) => cabin.id === cabinId);

    // Actualiza la disponibilidad de la cabaña
    cabin.availability.push({
      checkInDate,
      checkOutDate,
      name: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });

    // Puedes mostrar un mensaje de éxito o hacer otras operaciones necesarias
    console.log(`Reserva realizada para la cabaña con ID ${cabinId}`);
  }

  return (
    <div>
      <Link href={`/products/${product.id}`} className="group">
        <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          {Array.isArray(product.image) && (
            <div
              className="responsive"
              style={{ display: "flex", objectFit: "contain" }}
            >
              <Image
                alt="product image"
                src={product.image[0]} // Mostrar solo la primera imagen
                width={800}
                height={800}
                className={cn(
                  "object-cover duration-700 ease-in-out group-hover:opacity-75",
                  isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                )}
                onLoadingComplete={() => setLoading(false)}
              />

              {/* Icono para la cantidad de personas máximas */}
              <div className="absolute top-2 left-2 flex items-center justify-center bg-white rounded-full p-2">
                <AccessibilityIcon />
                <span className="text-gray-500 text-sm ml-1">
                  {product.maxCapacity}
                </span>
              </div>

              {/* Icono para la disponibilidad de aire acondicionado */}
              <div className="absolute top-2 right-2 flex items-center justify-center bg-white rounded-full p-2">
                <AcUnitIcon />
                <span className="text-gray-500 text-sm ml-1">A/C</span>
              </div>

              {/* Icono para la disponibilidad de cochera */}
              <div className="absolute bottom-2 left-2 flex items-center justify-center bg-white rounded-full p-2">
                <GarageIcon />
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
          <h3>{product.name}</h3>
          <p>$ {product.price}</p>
        </div>
        <p className="mt-1 text-sm italic text-gray-500 max-h-16 overflow-hidden">
          {product.description}
        </p>
      </Link>
      <Link href={`/products/${product.id}`} className="group">
        <button
          type="submit"
          className="ml-2 px-4 py-2 border border-transparent text-sm font-medium rounded-r-lg shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          Quiero alojarme Aquí!
        </button>
      </Link>
    </div>
  );
}

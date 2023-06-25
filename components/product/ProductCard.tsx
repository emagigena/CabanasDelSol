import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GarageIcon from "@mui/icons-material/Garage";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Button } from "@mui/material";
import ReservationModal from "../modal/ReservationModal";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductCard({ product }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      style={{ borderRadius: "20px" }}
      className="border border-grey shadow-lg rounded-lg relative"
    >
      <Link href={`/products/${product.id}`} className="group">
        <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-9 xl:aspect-h-8">
          {Array.isArray(product.image) && (
            <div
              className="responsive"
              style={{
                display: "flex",
                objectFit: "contain",
              }}
            >
              <Image
                alt="product image"
                src={product.image[1]} // Mostrar solo la primera imagen
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
              <div className="absolute bottom-2 left-2 flex items-center justify-center bg-white rounded-full p-2">
                <AccessibilityIcon />
                <span className="text-gray-500 text-sm ml-1">
                  {product.maxCapacity}
                </span>
              </div>

              {/* Icono para la disponibilidad de aire acondicionado */}
              <div className="absolute bottom-2 right-2 flex items-center justify-center bg-white rounded-full p-2">
                <AcUnitIcon />
                <span className="text-gray-500 text-sm ml-1">A/C</span>
              </div>

              {/* Icono para la disponibilidad de cochera */}
              {/* <div className="absolute bottom-2 left-2 flex items-center justify-center bg-white rounded-full p-2">
                <GarageIcon />
              </div> */}
              <div className="absolute top-2 right-10 flex items-center justify-center rounded-full p-2">
                <div>
                  <p className="discount-text mt-1 font-bold uppercase"><LocalOfferIcon color="inherit" /> 20% OFF de lunes a jueves</p>
                  
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-1 pt-4 pl-4 text-center font-medium text-gray-900">
          <h3>{product.name}</h3>
        </div>
        <div className="p-4 text-sm">
          <h3 className="h3-4 text-sm italic text-gray-400 max-h-16 overflow-hidden">
            {product.description}
          </h3>
        </div>
      </Link>
      <div className="text-center">
        <div className="flex justify-center mt-6 mb-6">
          <ReservationModal cabin={product} />
        </div>
      </div>
    </div>
  );
}

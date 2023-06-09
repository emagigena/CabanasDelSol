import React from "react";
import DropdownInfo from "../dropdown/DropdownInfo";

export default function CabinInfo({ cabanas }) {
  return (
    <>
      <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
        {cabanas && cabanas.name} | {cabanas && cabanas.maxCapacity} Personas
      </h1>
      <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
        Descripción
      </div>
      <p className="max-w-xl">
        {cabanas && cabanas.description}{" "}
        {/* Asegurar que cabanas exista antes de acceder a sus propiedades */}
      </p>
      <div>
        <DropdownInfo />
      </div>
    </>
  );
}

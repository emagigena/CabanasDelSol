import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "semantic-ui-react";

export default function NavBar({ cabinRef, CarouselRef, MapRef }) {
  const handleCabinClick = () => {
    cabinRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleCarouselClick = () => {
    CarouselRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleMapClick = () => {
    MapRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="bg-yellow-600">
      <div className="flex items-center justify-center px-4 py-2">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={64} height={64} />
          <span className="text-white font-bold">Cabañas del Sol</span>
        </Link>
      </div>
      <div className="ml-2 flex justify-center py-4 mr-2">
        {cabinRef ? (
          <>
            <Button
              className="mr-4 secondary"
              onClick={handleCabinClick}
            >
              Nuestras Cabañas
            </Button>
            <Button
              className="mr-4 secondary"
              onClick={handleCarouselClick}
            >
              Nuestro Complejo
            </Button>
            <Button className="secondary" onClick={handleMapClick}>
              Nuestra Ubicación
            </Button>
          </>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

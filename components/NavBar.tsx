import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Divider } from "semantic-ui-react";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";

export default function NavBar({ cabinRef, CarouselRef, MapRef, ContactRef }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleCabinClick = () => {
    cabinRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    closeMobileNav();
  };

  const handleCarouselClick = () => {
    CarouselRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    closeMobileNav();
  };

  const handleContactClick = () => {
    ContactRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleMapClick = () => {
    MapRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    closeMobileNav();
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <nav className="bg-yellow-600">
      <div className="flex items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={64} height={64} />
          <span className="text-white font-bold">Cabañas del Sol</span>
        </Link>
        <div className="hidden md:block space-x-4">
          {cabinRef ? (
            <>
              <span className="text-white font-bold" onClick={handleCabinClick}>
                Cabañas
              </span>
              <span
                className="text-white font-bold"
                onClick={handleCarouselClick}
              >
                Complejo
              </span>
              <span className="text-white font-bold" onClick={handleMapClick}>
                Ubicación
              </span>
              <span
                className="text-white font-bold"
                onClick={handleContactClick}
              >
                Contacto
              </span>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="block md:hidden slide-down">
          <Button icon onClick={toggleMobileNav}>
            <ViewWeekIcon />
          </Button>
        </div>
      </div>
      <div
        className={`${
          isMobileNavOpen ? "block slide-down" : "hidden"
        } md:hidden py-2 px-4`}
      >
        {cabinRef ? (
          <div className="slide-down">
            <span
              className="block w-full text-white font-bold text-center"
              onClick={handleCabinClick}
            >
              Cabañas
            </span>
            <Divider />
            <span
              className="block w-full text-white font-bold text-center"
              onClick={handleCarouselClick}
            >
              Complejo
            </span>{" "}
            <Divider />
            <span
              className="block w-full text-white font-bold text-center"
              onClick={handleMapClick}
            >
              Ubicación
            </span>{" "}
            <Divider />
            <span
              className="block w-full text-white font-bold text-center"
              onClick={handleMapClick}
            >
              Contacto
            </span>
            <Divider />
          </div>
        ) : (
          ""
        )}
      </div>
      <style jsx>{`
        .slide-down {
          animation: slideDown 0.5s;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}

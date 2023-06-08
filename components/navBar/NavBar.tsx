import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Divider } from "semantic-ui-react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar({
  cabinRef,
  CarouselRef,
  MapRef,
  ContactRef,
  ReviewsRef,
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleScrollIntoView = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    closeMobileNav();
  };

  // Uso de la función genérica en lugar de las funciones individuales
  const handleCabinClick = () => {
    handleScrollIntoView(cabinRef);
  };

  const handleCarouselClick = () => {
    handleScrollIntoView(CarouselRef);
  };

  const handleContactClick = () => {
    handleScrollIntoView(ContactRef);
  };

  const handleMapClick = () => {
    handleScrollIntoView(MapRef);
  };

  const handleReviewClick = () => {
    handleScrollIntoView(ReviewsRef);
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <nav
      className="bg-yellow-600"
      style={{ position: "fixed", width: "100%", zIndex: 999 }}
    >
      <div className="flex items-center justify-between px-4 py-2">
        <Link
          href="/"
          className="ml-4 flex md:hidden align-items-center text-center items-center space-x-2"
        >
          <Image src="/logo2NavBar.png" alt="Logo" width={300} height={300} />
        </Link>
        <Link href="/" className="hidden md:block items-center space-x-2">
          <Image src="/logo2NavBar.png" alt="Logo" width={300} height={300} />
        </Link>
        <div className="hidden md:block space-x-4">
          {cabinRef ? (
            <>
              <button className="nav-button">
                <span
                  className="text-white font-bold"
                  onClick={handleCabinClick}
                >
                  CABAÑAS
                </span>
              </button>
              <button className="nav-button">
                <span
                  className="text-white font-bold"
                  onClick={handleCarouselClick}
                >
                  COMPLEJO
                </span>
              </button>
              <button className="nav-button">
                <span
                  className="text-white font-bold"
                  onClick={handleReviewClick}
                >
                  COMENTARIOS
                </span>
              </button>
              <button className="nav-button">
                <span className="text-white font-bold" onClick={handleMapClick}>
                  UBICACIÓN
                </span>
              </button>
              <button className="nav-button">
                <span
                  className="text-white font-bold"
                  onClick={handleContactClick}
                >
                  CONTACTO
                </span>
              </button>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="block md:hidden slide-down">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ color: "white" }}
            onClick={toggleMobileNav}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </div>
      <div
        className={`${
          isMobileNavOpen ? "block slide-down" : "hidden"
        } md:hidden py-2 px-4`}
      >
        {cabinRef ? (
          <div className="slide-down">
            <Divider />
            <span
              className="block w-full text-white font-bold text-center"
              onClick={handleCabinClick}
            >
              CABAÑAS
            </span>
            <Divider />
            <span
              className="block w-full text-white font-bold text-center"
              onClick={handleCarouselClick}
            >
              COMPLEJO
            </span>{" "}
            <Divider />
            <span
              className="block w-full text-white font-bold text-center"
              onClick={handleMapClick}
            >
              UBICACIÓN
            </span>{" "}
            <Divider />
            <span
              className="block w-full text-white font-bold text-center"
              onClick={handleMapClick}
            >
              CONTACTO
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

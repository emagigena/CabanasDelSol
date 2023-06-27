import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Divider } from "semantic-ui-react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../public/logo2NavBar.png";

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

  const handlePricesClick = () => {
    <a href="/prices/prices"></a>;
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
          <Image src={logo} alt="Logo" width={300} height={300} />
        </Link>
        <Link href="/" className="hidden md:block items-center">
          <Image src={logo} alt="Logo" width={300} height={300} />
        </Link>
        <div className="hidden md:block space-x-8 mr-3">
          {cabinRef ? (
            <>
              <button className="nav-button">
                <span
                  className="text-white font-semi-bold"
                  onClick={handleCabinClick}
                >
                  Cabañas
                </span>
              </button>
              <button className="nav-button">
                <span className="text-white font-semi-bold">
                  <Link
                    style={{ fontStyle: "none" }}
                    className="colorLink"
                    href="/prices/prices"
                  >
                    Precios
                  </Link>
                </span>
              </button>
              <button className="nav-button">
                <span
                  className="text-white font-semi-bold"
                  onClick={handleCarouselClick}
                >
                  Complejo
                </span>
              </button>
              <button className="nav-button">
                <span
                  className="text-white font-semi-bold"
                  onClick={handleReviewClick}
                >
                  Comentarios
                </span>
              </button>
              <button className="nav-button">
                <span
                  className="text-white font-semi-bold"
                  onClick={handleMapClick}
                >
                  Ubicación
                </span>
              </button>
              <button className="nav-button">
                <span
                  className="text-white font-semi-bold"
                  onClick={handleContactClick}
                >
                  Contacto
                </span>
              </button>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="block md:hidden slide-down">
          {cabinRef ? (
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
          ) : (
            ""
          )}
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
              className="block w-full text-white font-semi-bold text-center"
              onClick={handleCabinClick}
            >
              Cabañas
            </span>
            <Divider />
            <span
              className="block w-full text-white font-semi-bold text-center"
              onClick={handleCarouselClick}
            >
              <a className="colorLink" style={{}} href="/prices/prices">
                Precios
              </a>
            </span>
            <Divider />
            <span
              className="block w-full text-white font-semi-bold text-center"
              onClick={handleCarouselClick}
            >
              Complejo
            </span>{" "}
            <Divider />
            <span
              className="block w-full text-white font-semi-bold text-center"
              onClick={handleMapClick}
            >
              Ubicación
            </span>{" "}
            <Divider />
            <span
              className="block w-full text-white font-semi-bold text-center"
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

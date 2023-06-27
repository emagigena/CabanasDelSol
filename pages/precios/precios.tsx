import React from "react";
import { Button, Container, Table } from "semantic-ui-react";
import NavBar from "../../components/navBar/NavBar";
import Image from "next/image";
import ContactForm from "../../components/contactForm/ContactForm";
import Price from "../../components/price/Price";
import Link from "next/link";
import { ButtonHome } from "../../components/buttonHome/ButtonHome";

export default function Precios() {
  return (
    <>
      <NavBar
        cabinRef={undefined}
        CarouselRef={undefined}
        MapRef={undefined}
        ContactRef={undefined}
        ReviewsRef={undefined}
      />

      <header className="relative">
        <div className="absolute inset-x-0 bottom-0 bg-gray-100" />
        <div className="mx-auto pt-9">
          <div className="relative shadow-xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <Image
                priority
                className="h-full w-full object-cover"
                src={
                  "https://res.cloudinary.com/dhrfu31jp/image/upload/v1687813012/caba%C3%B1as/extra/prices_oki81r.jpg"
                }
                alt="Cabañas del Sol"
                width={1920}
                height={100}
              />
              <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8"></div>
          </div>
        </div>
      </header>
      <ButtonHome />
      <Price />
      <div className="sm:py-1 mx-auto max-w-7xl py-1 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 mt-10">
          <p className="text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
            Contactanos
          </p>
        </div>
        <ContactForm cabinID={""} />
      </div>
    </>
  );
}

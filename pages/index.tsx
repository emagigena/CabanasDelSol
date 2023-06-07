import React, { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import "semantic-ui-css/semantic.min.css";
import "@mui/material/";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Map from "../components/Map";
import CarouselHome from "../components/CarouselHome";
import ProductList from "../components/ProductList";
import NavBar from "../components/NavBar";
import ContactForm from "../components/ContactForm";

export default function Gallery() {
  const cabinRef = useRef<HTMLDivElement>();
  const CarouselRef = useRef<HTMLDivElement>();
  const MapRef = useRef<HTMLDivElement>();
  const ContactRef = useRef<HTMLDivElement>();

  const scrollHandler = (e) => {
    e.preventDefault();
    cabinRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <NavBar
        cabinRef={cabinRef}
        CarouselRef={CarouselRef}
        MapRef={MapRef}
        ContactRef={ContactRef}
      />
      <Header scrollHandler={scrollHandler} />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div ref={cabinRef} />
        <ProductList />
        <div ref={CarouselRef} />
        <CarouselHome />
        <div ref={MapRef} />
        <Map />
        <div ref={ContactRef} />
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              Contactá con Nosotros
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
}

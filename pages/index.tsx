import React, { useRef, useState, useEffect } from "react";
import Header from "../components/header/Header";
import "semantic-ui-css/semantic.min.css";
import "@mui/material/";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Map from "../components/map/Map";
import CarouselHome from "../components/carousel/CarouselHome";
import ProductList from "../components/product/ProductList";
import NavBar from "../components/navBar/NavBar";
import ContactForm from "../components/contactForm/ContactForm";
import ReviewList from "../components/reviews/ReviewList";

export default function Gallery() {
  const cabinRef = useRef<HTMLDivElement>();
  const CarouselRef = useRef<HTMLDivElement>();
  const MapRef = useRef<HTMLDivElement>();
  const ContactRef = useRef<HTMLDivElement>();
  const ReviewsRef = useRef<HTMLDivElement>();

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
        ReviewsRef={ReviewsRef}
      />
      <Header scrollHandler={scrollHandler} />
      {/* <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"> */}
      <div ref={cabinRef} />
      <ProductList />

      <div ref={CarouselRef} />
      <CarouselHome />
      <div ref={ReviewsRef} />
      <div className="px-4 sm:px-6 lg:max-w-8xl lg:px-8">
        <ReviewList />
        <div ref={MapRef} />
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              Nuestra Ubicación
            </p>
          </div>
        </div>
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

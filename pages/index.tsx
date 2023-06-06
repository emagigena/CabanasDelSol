import React, { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import "semantic-ui-css/semantic.min.css";
import "@mui/material/";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Map from "../components/Map";
import CarouselHome from "../components/CarouselHome";
import ProductList from "../components/ProductList";
import NavBar from "../components/NavBar";

export default function Gallery() {
  const cabinRef = useRef<HTMLDivElement>();
  const CarouselRef = useRef<HTMLDivElement>();
  const MapRef = useRef<HTMLDivElement>();

  const scrollHandler = (e) => {
    e.preventDefault();
    cabinRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <NavBar cabinRef={cabinRef} CarouselRef={CarouselRef} MapRef={MapRef} />
      <Header scrollHandler={scrollHandler} />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div ref={cabinRef} />
        <ProductList />
        <div ref={CarouselRef} />
        <CarouselHome />
        <div ref={MapRef} />
        <Map />
      </div>
    </>
  );
}

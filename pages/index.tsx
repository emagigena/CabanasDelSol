import React from "react";
import { useRef } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import cabanas from "../data/cabins.json";
import "semantic-ui-css/semantic.min.css";
import "@mui/material/";
import { ImageList, ImageListItem } from "@mui/material/";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import itemData from "../data/itemData.json";

export default function Gallery() {
  let cabinRef = useRef<HTMLDivElement>();

  const scrollHandler = (e) => {
    e.preventDefault();
    cabinRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Header scrollHandler={scrollHandler} />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl"
              ref={cabinRef}
            >
              Nuestras Cabañas
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {cabanas.map((cabana) => (
            <ProductCard product={cabana} key={cabana.id} />
          ))}
        </div>
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              Nuestro Complejo
            </p>
          </div>
        </div>
        <div>
          <Carousel>
            {itemData.map((item) => (
              <div key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 1x`}
                  alt={"images"}
                  loading="lazy"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

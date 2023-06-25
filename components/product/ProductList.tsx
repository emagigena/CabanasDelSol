import React, { useEffect, useState } from "react";
import cabanas from "../../data/cabins.json";
import ProductCard from "./ProductCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from "semantic-ui-react";

const ProductList = () => {
  const displayedCabanas = cabanas;
  const [showMore, setShowMore] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   checkMobile();

  //   window.addEventListener("resize", checkMobile);
  //   return () => {
  //     window.removeEventListener("resize", checkMobile);
  //   };
  // }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
            Nuestras Cabañas
          </p>
        </div>
      </div>
      <div className="hidden sm:block">
        <Carousel
          showThumbs={false}
          showArrows={true}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={false}
          centerMode={true}
          centerSlidePercentage={30}
          selectedItem={1}
        >
          {displayedCabanas.map((cabana) => (
            <div key={cabana.id} style={{ padding: "10px" }}>
              <ProductCard product={cabana} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="block sm:hidden">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {displayedCabanas.slice(0, 3).map((cabana) => (
            <div style={{ padding: "40px" }} key={cabana.id}>
              <ProductCard product={cabana} />
            </div>
          ))}
        </div>
        {!showMore && (
          <div className="flex justify-center mt-6">
            <Button
              onClick={toggleShowMore}
              style={{ backgroundColor: "#F1B140", color: "white" }}
            >
              Ver más
            </Button>
          </div>
        )}
        {showMore && (
          <div className="text-center">
            {displayedCabanas.slice(3).map((cabana) => (
              <div key={cabana.id} style={{ padding: "40px" }}>
                <ProductCard product={cabana} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;

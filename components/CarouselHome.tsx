import { Carousel } from "react-responsive-carousel";
import itemData from "../data/itemData.json";

const CarouselHome = () => {
  return (
    <>
      <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
            Nuestro Complejo
          </p>
        </div>
      </div>
      <div className="sm:py-15 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Carousel>
          {itemData.map((item) => (
            <div key={item.img}>
              <img
                style={{ borderRadius: "10px" }}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 1x`}
                alt={"images"}
                loading="lazy"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselHome;

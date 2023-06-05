import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CustomCarousel = ({ cabins }) => {
  return (
    <Carousel>
      {cabins.map((item, index) => (
        <div key={index} style={{ display: "flex", justifyContent: "center" }}>
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
            style={{
              width: "600px",
              height: "100%",
              borderRadius: "10px",
              overflow: "hidden",
              objectFit: "fill"
            }}
          >
            <Image
              src={item}
              width={500}
              height={500}
              objectFit="fill"
              alt="Image"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;

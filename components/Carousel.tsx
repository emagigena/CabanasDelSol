import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CustomCarousel = ({ cabins }) => {
  return (
    <Carousel>
      {cabins.map((item, index) => (
        <div key={index}>
          <div
            style={{
              maxWidth: "600px",
              height: "600px",
              borderRadius: "10px",
              overflow: "hidden",
              objectFit: "contain",
              display: "flex",
            }}
            className="responsive"
          >
            <Image src={item} alt="Image" width={600} height={600} />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;

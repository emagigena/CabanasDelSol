import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CustomCarousel = ({ cabins }) => {
  return (
    <Carousel>
      {cabins.map((item, index) => (
        <div
          key={index}
          style={{
            maxWidth: "100%",
            maxHeight: "500px",
            borderRadius: "10px",
            overflow: "hidden",
            display: "flex",
          }}
        >
          <img
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 1x`}
            alt={"images"}
            loading="lazy"
            style={{ borderRadius: "10px", objectFit:"cover" }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;

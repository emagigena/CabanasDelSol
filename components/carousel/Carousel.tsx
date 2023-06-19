import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CustomCarousel = ({ cabins }) => {
  return (
    <>
    <Carousel>
      {cabins.map((item, index) => (
        <div key={index} style={{objectFit: "cover"}}>
          {item.endsWith(".mp4") ? (
            
            <video
              src={item}
              controls
              autoPlay={index === 0} // Autoplay the first video
              loop
              muted
              style={{
                maxWidth: "100%",
                maxHeight: "600px",
                borderRadius: "10px",
                objectFit: "contain",
              }}
            />
          ) : (
            <img
              src={item}
              alt="images"
              style={{
                borderRadius: "10px",
                objectFit: "cover",
                maxWidth: "100%",
                maxHeight: "600px",
              }}
            />
          )}
        </div>
        
      ))}
    </Carousel>
    </>
  );
};

export default CustomCarousel;

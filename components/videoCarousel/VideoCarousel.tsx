import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const VideoCarousel = ({ cabins }) => {
  return (
    <>
      <video
        src={cabins.video}
        controls
        style={{
          maxWidth: "100%",
          maxHeight: "500px",
          borderRadius: "10px",
          objectFit: "contain",
        }}
      />
    </>
  );
};

export default VideoCarousel;

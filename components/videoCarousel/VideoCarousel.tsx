import getConfig from 'next/config';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const { publicRuntimeConfig } = getConfig();

const VideoCarousel = ({ cabins }) => {
  return (
    <>
      <video
        src={`${publicRuntimeConfig.staticFolder}/videos/${cabins.video}`}
        controls
        style={{
          maxWidth: '100%',
          maxHeight: '500px',
          borderRadius: '10px',
          objectFit: 'contain',
        }}
      />
    </>
  );
};

export default VideoCarousel;

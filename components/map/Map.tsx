import Image from "next/image";
import React from "react";
import maps from "../../data/images/maps.png";

const Map = () => {
  return (
    <>
      <div className="sm:mt-15 mx-auto max-w-7xl mb-10 px-4 sm:px-6 lg:px-8">
        <a
          href="https://www.google.com/maps/place/Cabañas+Del+Sol/@-31.5081366,-60.4534622,16z/data=!4m6!3m5!1s0x95b4556577844b6b:0x766feb8921fe8f47!8m2!3d-31.5088775!4d-60.4546853!16s%2Fg%2F11c5zscgxr?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="image-container" style={{ borderRadius: "10px" }}>
            <Image src={maps} alt={""} className="image" />
            <div className="overlay">
              <p className="overlay-text">Ver ubicación</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Map;

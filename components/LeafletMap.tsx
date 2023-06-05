// import React, { useEffect, useRef } from "react";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// const LeafletMap = () => {
//   const mapContainerRef = useRef(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const map = L.map(mapContainerRef.current).setView([-31.5088775, -60.4546853], 13);

//       L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//         attribution:
//           'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       L.marker([-31.5088775,-60.4546853]).addTo(map);

//       // Puedes agregar más marcadores o capas al mapa según tus necesidades

//       return () => {
//         map.remove();
//       };
//     }
//   }, []);

//   return (
//     <div ref={mapContainerRef} style={{ width: "100%", height: "400px" }} />
//   );
// };

// export default typeof window !== "undefined" ? LeafletMap : null;

import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import img from "../../public/off.png";
import  Image  from "next/image";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Lógica para abrir WhatsApp en una nueva ventana o redirigir al usuario a tu número de WhatsApp
    // Puedes utilizar la API de WhatsApp para generar el enlace adecuado con tu número y un mensaje predefinido
    // Por ejemplo: `https://wa.me/1234567890?text=¡Hola!`
  };

  return (
    <div className="whatsapp-button">
      {/* <button onClick={handleWhatsAppClick}> */}
      <Image
        src={img}
        alt={""}
        width={200}
        height={200}
      />
      {/* </button> */}
    </div>
  );
};

export default WhatsAppButton;

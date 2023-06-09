import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import CabinInfo from "../cabinInfo/CabinInfo";
import CustomCarousel from "../carousel/Carousel";
import ContactForm from "../contactForm/ContactForm";
// import "./ReservationModal.css"; // Importar el archivo CSS personalizado

export default function ReservationModal({ cabin }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      trigger={
        <Button style={{ backgroundColor: "#F1B140", color: "white" }}>
          ¡Quiero Reservar!
        </Button>
      }
      closeIcon
      className="reservation-modal" // Agregar la clase CSS personalizada al modal
    >
      <Modal.Header>{cabin.name}</Modal.Header>
      <Modal.Content>
        <CabinInfo cabanas={cabin} />
        <CustomCarousel cabins={cabin.image} />
        <ContactForm />
      </Modal.Content>
    </Modal>
  );
}

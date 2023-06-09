import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import CabinInfo from "../cabinInfo/CabinInfo";
import CustomCarousel from "../carousel/Carousel";
import ContactForm from "../contactForm/ContactForm";
import { Grid } from "@mui/material";
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
        <div className="hidden md:block">
          <Grid container>
            <Grid
              item
              className="mx-auto max-w-2xl px-4 sm:px-6 mt-10 lg:max-w-7xl lg:px-8"
              style={{ marginTop: "2rem", width: "50%" }}
            >
              <CabinInfo cabanas={cabin} />
              <ContactForm />
            </Grid>
            <Grid
              item
              className="mx-auto max-w-2xl px-4 sm:px-6 mt-10 lg:max-w-7xl lg:px-8"
              style={{ marginTop: "2rem", width: "50%" }}
            >
              <CustomCarousel cabins={cabin.image} />
            </Grid>
          </Grid>
        </div>
        <div className="block md:hidden ">
          <CabinInfo cabanas={cabin} />
          <CustomCarousel cabins={cabin.image} />
          <ContactForm />
        </div>
      </Modal.Content>
    </Modal>
  );
}

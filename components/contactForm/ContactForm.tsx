import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export default function ContactForm({cabinID}) {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    telefono: "",
    numberOfPeople: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Validar campos
    if (
      formData.name === "" ||
      formData.lastName === "" ||
      formData.telefono === "" ||
      formData.numberOfPeople === "" ||
      formData.checkInDate === "" ||
      formData.checkOutDate === ""
    ) {
      alert(
        "Por favor completa todos los campos antes de enviar el formulario."
      );
      return;
    }

    // Validar formato de campos
    const phoneNumberRegex = /^\d+$/;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!phoneNumberRegex.test(formData.telefono)) {
      alert("Por favor ingresa un número de teléfono válido.");
      return;
    }

    if (!Number.isInteger(Number(formData.numberOfPeople))) {
      alert("Por favor ingresa una cantidad de personas válida.");
      return;
    }

    if (
      !dateRegex.test(formData.checkInDate) ||
      !dateRegex.test(formData.checkOutDate)
    ) {
      alert("Por favor ingresa fechas de ingreso y egreso válidas.");
      return;
    }

    // Enviar formulario
    const {
      name,
      lastName,
      telefono,
      numberOfPeople,
      checkInDate,
      checkOutDate,
    } = formData;
    const message = `Hola , Me gusaría recibir más información para reservar la cabaña ${cabinID}. Mis datos son:
      Nombre: ${name} ${lastName}, Telefono: ${telefono} Cantidad de personas: ${numberOfPeople}, Fecha de ingreso: ${checkInDate}, Fecha de egreso: ${checkOutDate}`;
    const url = `https://wa.me/3424055811?text=${encodeURIComponent(message)}`; // Reemplaza XXXXXXXXXX por el número de WhatsApp de la empresa

    window.open(url, "_blank");
  };

  return (
    <>
      <form>
        <TextField
          color="warning"
          name="name"
          label="Nombre"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          style={{ marginBottom: "10px", borderColor: "#F1B140" }}
        />
        <TextField
          color="warning"
          name="lastName"
          label="Apellido"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          required
          style={{ marginBottom: "10px", borderColor: "#F1B140" }}
        />
        <TextField
          color="warning"
          name="telefono"
          label="Celular"
          type="tel"
          value={formData.telefono}
          onChange={handleChange}
          fullWidth
          required
          style={{ marginBottom: "10px", borderColor: "#F1B140" }}
        />
        <TextField
          color="warning"
          name="numberOfPeople"
          label="Cantidad de personas"
          type="number"
          value={formData.numberOfPeople}
          onChange={handleChange}
          fullWidth
          required
          style={{ marginBottom: "10px", borderColor: "#F1B140" }}
        />
        <TextField
          color="warning"
          name="checkInDate"
          label="Fecha de ingreso"
          type="date"
          value={formData.checkInDate}
          onChange={handleChange}
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginBottom: "10px", borderColor: "#F1B140" }}
        />
        <TextField
          color="warning"
          name="checkOutDate"
          label="Fecha de egreso"
          type="date"
          value={formData.checkOutDate}
          onChange={handleChange}
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginBottom: "10px", borderColor: "#F1B140" }}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          style={{ marginBottom: "30px", backgroundColor: "#F1B140" }}
        >
          Enviar a WhatsApp
        </Button>
      </form>
    </>
  );
}

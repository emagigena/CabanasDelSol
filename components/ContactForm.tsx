import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
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

    // Verifica si todos los campos están completos
    const isFormValid = Object.values(formData).every((value) => value !== "");

    if (isFormValid) {
      const {
        name,
        lastName,
        email,
        numberOfPeople,
        checkInDate,
        checkOutDate,
      } = formData;
      const message = `Hola! Me gustaría reservar esta cabaña, se encuentra disponible estas fechas? Mis datos son:
      Nombre: ${name} ${lastName}%0AEmail: ${email}%0ACantidad de personas: ${numberOfPeople}%0AFecha de ingreso: ${checkInDate}%0AFecha de egreso: ${checkOutDate}`;
      const url = `https://wa.me/3424770011?text=${message}`; // Reemplaza XXXXXXXXXX por el número de WhatsApp de la empresa

      window.open(url, "_blank");
    } else {
      // Muestra un mensaje de error o realiza alguna acción en caso de campos vacíos
      alert(
        "Por favor completa todos los campos antes de enviar el formulario."
      );
    }
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
          className="border-color: #F1B140;"
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
          className="border-color: #F1B140;"
        />
        <TextField
          color="warning"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
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
          style={{ marginBottom: "10px", backgroundColor: "#F1B140" }}
        >
          Enviar a WhatsApp
        </Button>
      </form>
    </>
  );
}

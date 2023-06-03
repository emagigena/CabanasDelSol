import { Button, Container, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
// import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";
// import { format } from "date-fns";
// import { es } from "date-fns/locale";

export default function FormRegister({ cabanas }) {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleAvailabilityCheck = (e) => {
    e.preventDefault();

    // Verificar la disponibilidad utilizando las fechas de ingreso y egreso proporcionadas
    const availability = cabanas.availability;

    // Comprobar si las fechas de ingreso y egreso están en conflicto con las existentes en la disponibilidad
    const isConflict = availability.some(
      (item) =>
        (checkInDate >= item.checkInDate && checkInDate <= item.checkOutDate) ||
        (checkOutDate >= item.checkInDate &&
          checkOutDate <= item.checkOutDate) ||
        (checkInDate <= item.checkInDate && checkOutDate >= item.checkOutDate)
    );

    setIsAvailable(!isConflict);

    if (!isConflict) {
      // Crear objeto con la información del usuario
      const userData = {
        name: formData.name,
        lastName: formData.lastName,
        address: formData.address,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
      };

      // Agregar el objeto userData al arreglo availability de la cabaña seleccionada
      cabanas.availability.push(userData);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container style={{ backgroundColor: "#f8f8f8", padding: "1rem" }}>
      {/* <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}> */}
      <form onSubmit={handleAvailabilityCheck}>
        {/* <DatePicker
            label="Check-in Date"
            value={checkInDate}
            onChange={setCheckInDate}
            fullWidth
            margin="normal"
            format="dd/MM/yyyy"
          />

          <DatePicker
            label="Check-out Date"
            value={checkOutDate}
            onChange={setCheckOutDate}
            fullWidth
            margin="normal"
            format="dd/MM/yyyy"
          /> */}

        <TextField
          label="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Name"
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Address"
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone Number"
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Check Availability
        </Button>
        {isAvailable ? <p>Available!</p> : <p>Not Available!</p>}
        {isAvailable && (
          <p className="mt-2 text-sm text-gray-500">{"availability"}</p>
        )}
      </form>
      {/* </MuiPickersUtilsProvider> */}
    </Container>
  );
}

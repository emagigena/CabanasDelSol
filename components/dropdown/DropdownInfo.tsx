import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "semantic-ui-react";

export default function DropdownInfo() {
  return (
    <div>
      <Accordion
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          backgroundColor: "#F1B140",
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ color: "white" }}
        >
          <p className="font-bold">Distribución</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <div>
              <li>3 habitaciones en planta baja</li>
              <li>Cocina comedor </li>
              <li>Dos baños</li>
              <li> Quincho con asador</li>
            </div>
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          backgroundColor: "#F1B140",
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ color: "white" }}
        >
          <p className="font-bold">Equipamiento</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <div>
              <li>Heladera</li>
              <li>Ropa de cama</li>
              <li>Cocina con vajilla</li>
              <li>Microondas, Pava eléctrica</li>
              <li>Tv con Directv</li>
              <li>Wifi en todo el complejo</li>
              <li>
                <span className="font-bold">
                  No contamos con toallas y toallones
                </span>
              </li>
            </div>
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          backgroundColor: "#F1B140",
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          style={{ color: "white" }}
        >
          <p className="font-bold">Servicios</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <div>
              <li>Ambiente Climatizado</li>
              <li>Desayuno seco</li>
              <li>Reserva de quincho comunitario para realizar festejos</li>
            </div>
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

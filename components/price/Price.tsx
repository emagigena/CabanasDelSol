import React from "react";
import { Table } from "semantic-ui-react";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

const Price = () => {
  return (
    <div className="sm:py-1 mx-auto max-w-7xl py-1 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <p className="mt-10 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
          TARIFAS
        </p>
        <div style={{ marginTop: "20px" }}>
          <span>
            Niños menores a 3 años no abonan estadía, consultar por cambios o
            respectivas modificaciones
          </span>
        </div>
      </div>
      <Table celled className="styled-table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Tarifas por día</Table.HeaderCell>
            {/* <Table.HeaderCell>
              Lunes a Jueves <span className="discount-tag"> 20% OFF</span>
            </Table.HeaderCell> */}
            <Table.HeaderCell>Desde</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body style={{ textAlign: "center" }}>
          <Table.Row>
            <Table.Cell>Para 2 personas</Table.Cell>
            {/* <Table.Cell>$13.600 por día</Table.Cell> */}
            <Table.Cell>Desde $55.000 por día</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Para 3 personas</Table.Cell>
            {/* <Table.Cell>$15.200 por día</Table.Cell> */}
            <Table.Cell>Desde $60.000 por día</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Para 4-5 personas</Table.Cell>
            {/* <Table.Cell>$19.200 por día</Table.Cell> */}
            <Table.Cell>Desde $70.000 por día</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Para 6 personas</Table.Cell>
            {/* <Table.Cell>$21.600 por día</Table.Cell> */}
            <Table.Cell>Desde $92.000 por día</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span>Para 7-8 personas</span>
            </Table.Cell>
            {/* <Table.Cell>$25.600 por día</Table.Cell> */}
            <Table.Cell>Desde $105.000 por día</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span>Para 9-10 personas</span>
            </Table.Cell>
            {/* <Table.Cell>$25.600 por día</Table.Cell> */}
            <Table.Cell>Desde $150.000 por día</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default Price;

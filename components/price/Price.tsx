import React from "react";
import { Container, Table } from "semantic-ui-react";

const Price = () => {
  return (
    <Container className="table-container">
      <div className="sm:py-1 mx-auto max-w-7xl py-1 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
            TARIFAS
          </p>
        </div>
        <Table celled className="styled-table">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Tarifas por día</Table.HeaderCell>
              <Table.HeaderCell>
                Lunes a Jueves <span className="discount-tag"> 20% OFF</span>
              </Table.HeaderCell>
              <Table.HeaderCell>Viernes a Domingo</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Para 2 personas</Table.Cell>
              <Table.Cell>$11.200 por día</Table.Cell>
              <Table.Cell>$14.000 por día</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Para 3 personas</Table.Cell>
              <Table.Cell>$12.000 por día</Table.Cell>
              <Table.Cell>$15.000 por día</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Para 4-5 personas</Table.Cell>
              <Table.Cell>$15.200 por día</Table.Cell>
              <Table.Cell>$19.000 por día</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Para 6 personas</Table.Cell>
              <Table.Cell>$16.800 por día</Table.Cell>
              <Table.Cell>$21.000 por día</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span>Para 7-8 personas</span>
              </Table.Cell>
              <Table.Cell>$20.000 por día</Table.Cell>
              <Table.Cell>$25.000 por día</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Container>
  );
};

export default Price;

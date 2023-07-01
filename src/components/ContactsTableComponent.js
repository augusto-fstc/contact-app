import React from "react";
import Table from 'react-bootstrap/Table';
import './styled.css';

function DarkExample() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>E-mail</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2321</td>
          <td>Otto</td>
          <td>otto2@aluno.ifal.edu.br</td>
        </tr>
        <tr>
          <td>4562</td>
          <td>Thornton</td>
          <td>thornton5@aluno.ifal.edu.br</td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </Table>
  );
}

export default DarkExample;
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styled.css';

function BasicExample() {
  return (
    <Form className="custom-navbar">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;
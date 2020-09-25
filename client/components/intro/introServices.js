import React from "react";
import { Container, Row } from "reactstrap";
import { Col } from "reactstrap";

const IntroServices = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Areas We Serve</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4}>1</Col>
        <Col md={4}>2</Col>
        <Col md={4}>3</Col>
      </Row>
      <Row>
        <Col md={4}>1</Col>
        <Col md={4}>2</Col>
        <Col md={4}>3</Col>
      </Row>
    </Container>
  );
};

export default IntroServices;

import React from "react";
import { Container, Row, Col } from "reactstrap";

const IntroBlog = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>News & Events</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4}>1</Col>
        <Col md={4}>2</Col>
        <Col md={4}>3</Col>
      </Row>
    </Container>
  );
};

export default IntroBlog;

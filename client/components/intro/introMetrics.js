import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const ImgWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const IntroMetrics = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <ImgWrapper>
            <img src="/images/vectors/metrics.png" alt="" />
          </ImgWrapper>
        </Col>
        <Col md={6}>
          <p>Im just a place holder</p>
        </Col>
      </Row>
    </Container>
  );
};

export default IntroMetrics;

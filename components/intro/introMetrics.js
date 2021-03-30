import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import IntroMetricsContent from "./introMetricsContent";

const Section = styled.section`
  @media only screen and (min-width: 900px) {
    background-image: url("/images/backgrounds/right-figure.png");
  }
  background-position: top right;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 10rem;
  margin-bottom: 3rem;
`;

const ImgWrapper = styled.div`
  margin-bottom: 2rem;
  img {
    width: 100%;
  }
`;

const IntroMetrics = ({ data }) => {
  return (
    <Section>
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <ImgWrapper>
              <img src="/images/vectors/metrics.png" alt="" />
            </ImgWrapper>
          </Col>
          <Col lg={6} md={12}>
            {data.map((content) => (
              <IntroMetricsContent content={content} key={content._id} />
            ))}
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default IntroMetrics;

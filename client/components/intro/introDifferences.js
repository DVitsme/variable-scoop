import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import IntroDifferencesContent from './introDifferencesContent';

const Section = styled.section`
  background-image: url('/images/backgrounds/right-figure.png');
  background-position: top right;
  background-repeat: no-repeat;
  background-size: contain;
`;

const ImgWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const IntroMetrics = ({ data }) => {
  return (
    <Section>
      <Container>
        <Row>
          <Col md={6}>
            <ImgWrapper>
              <img src="/images/vectors/metrics.png" alt="" />
            </ImgWrapper>
          </Col>
          <Col md={6}>
            {data.map((content) => (
              <IntroDifferencesContent content={content} key={content._id} />
            ))}
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default IntroMetrics;

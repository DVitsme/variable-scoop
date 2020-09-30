import React from 'react';
import { Container as ReacstrapContainer, Row } from 'reactstrap';
import { Col } from 'reactstrap';
import IntroServicesContent from './introServicesContent';
import styled from 'styled-components';

const Section = styled.section`
  margin: 20px 0;
  padding: 0;
  background-image: url('/images/backgrounds/area-we-serve-bg.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Container = styled(ReacstrapContainer)`
  text-align: center;
`;

const IntroServices = ({ data }) => {
  return (
    <Section>
      <Container className="my-5 py-5">
        <Row>
          <Col>
            <h1>Specialtites</h1>
          </Col>
        </Row>
        <Row>
          {data.map((services) => (
            <IntroServicesContent services={services} key={services._id} />
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default IntroServices;

import React from "react";
import { Container as ReactstrapContainer, Col, Row } from "reactstrap";
import styled from "styled-components";

import { ourStory } from "../../data";

const Container = styled(ReactstrapContainer)`
  text-align: center;
  h1 {
    font-size: 2rem;
  }
  p {
  }
`;

const IntroAbout = () => {
  return (
    <Container>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <h1>{ourStory.title}</h1>
          <p>{ourStory.content}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default IntroAbout;

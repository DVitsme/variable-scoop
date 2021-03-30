import React from "react";
import { Container as ReactstrapContainer, Row, Col } from "reactstrap";

import styled from "styled-components";

const IntroBlog = () => {
  return (
    <Section>
      <Container>
        <Row></Row>
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <blockquote className="blockquote">
              <p className="mb-0">
                "The goal is to turn data into information, and information into
                insight."
              </p>
              <footer className="blockquote-footer">
                <cite title="Source Title">Carly Fiorina</cite>
              </footer>
            </blockquote>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  margin-top: -5rem;
  width: 100%;
  background-color: #fbfcfc;
`;
const Container = styled(ReactstrapContainer)`
  blockquote {
    margin: 5.5rem 0;
    text-align: center;
    font-size: 4.5rem;
    p {
      font-size: 5rem;
      font-weight: 500;
      line-height: 1em;
    }
    .blockquote-footer {
      text-align: right;
    }
  }
`;

export default IntroBlog;

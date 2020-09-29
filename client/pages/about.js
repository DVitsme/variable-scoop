import React from "react";
import Link from "next/link";
import { Container as ReactstrapContainer, Row, Col } from "reactstrap";
import { fetchAPI } from "../components/utils/api";

import styled from "styled-components";

const Container = styled(ReactstrapContainer)`
  width: 100%;
`;

const ImageLeft = styled(Col)`
  background-image: url("/images/hero/hero_02.jpg");
  background-position: center center;
  background-size: cover;
  padding: 8% 8% 8% 8%;
`;
const About = ({ getAbout }) => {
  return (
    <Container fluid>
      <Row>
        <ImageLeft md={6}></ImageLeft>
        <Col md={6}>
          {" "}
          <h1>Im the About Page</h1>
          <Link href="/">
            <a>Go Home</a>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

export async function getStaticProps(context) {
  const getAbout = await fetchAPI("about");
  return {
    props: { getAbout },
  };
}

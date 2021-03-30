import styled from "styled-components";

import { Container, Row, Col, Jumbotron } from "reactstrap";
import { WhiteButton } from "../styles/Button.component";
import { HiddenOnPhone } from "../styles/HiddenContent.component";
import Link from "next/link";

const Hero = styled(Jumbotron)`
  height: 90vh;
  background-color: #333;
  background-image: url("images/hero/hero_02.jpg");
  background-position: top center;
  background-size: cover;
  position: relative;
  color: ${(props) => props.theme.white};
  border-radius: 0;
  @media screen and (max-width: 900px) {
    background-image: linear-gradient(
        to bottom right,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.7)
      ),
      url("images/hero/hero_02.jpg");
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: 88px;
  font-size: 88px;
  line-height: 90px;
  outline-color: ${(props) => props.theme.white};
`;

// <span>
//   <Row>
//     <SubHeader md={4}>Strategic planning</SubHeader>
//     <SubHeader md={4}>Data Strategy</SubHeader>
//     <SubHeader md={4}>Impact Analysis</SubHeader>
//   </Row>
// </span>;

const SubHeader = styled.p`
  text-align: left;
  line-height: 24px;
  letter-spacing: 0px;
  font-weight: 500;
  font-size: 22px;
`;

const HeroImage = () => {
  return (
    <Hero>
      <Container>
        <Row>
          <Title className="mt-5 pt-5">
            Get The <br />
            Scoop on <br />
            Your Data
          </Title>
        </Row>
        <HiddenOnPhone>
          <Row>
            <Col md={6}>
              <SubHeader className="my-4">
                We support groups who bring about transformational change by
                analyzing their efforts and building strategic plans to maximize
                their efforts.
              </SubHeader>
              <Link href="/contact">
                <a>
                  <WhiteButton>Get In Touch</WhiteButton>
                </a>
              </Link>
            </Col>
          </Row>
        </HiddenOnPhone>
      </Container>
    </Hero>
  );
};

export default HeroImage;

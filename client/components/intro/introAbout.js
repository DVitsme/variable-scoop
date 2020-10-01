import { Container as ReactstrapContainer, Col, Row } from "reactstrap";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Link from "next/link";

import { OrangeButton } from "../styles/Button.component";

const Section = styled.section`
  background-image: url("images/backgrounds/left-figure.png");
  background-position: center left;
  background-size: cover;
  margin: 9rem 0;
`;

const Container = styled(ReactstrapContainer)`
  h3 {
    font-family: Lato, sans-serif;
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 44px;
    margin-bottom: 3rem;
    letter-spacing: 1.2px;
  }
  img {
    width: 100%;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
  }
  p:first-of-type::first-letter {
    font-weight: bold;
    color: ${(props) => props.theme.orange};
    font-size: 60px;
    font-weight: 700;
    line-height: 0.92;
    margin-right: 10px;
    text-transform: uppercase;
    float: left;
    margin-top: 1rem;
  }
`;

const IntroAbout = ({
  data: { excerptTitle, slug, excerptBody, excerptImage },
}) => {
  return (
    <Section>
      <Container>
        <Row>
          <Col md={6}>
            <ReactMarkdown source={excerptBody} />
            <div className="my-5">
              <OrangeButton>
                <Link href="/about">
                  <a> Read About Us </a>
                </Link>
              </OrangeButton>
            </div>
          </Col>
          <Col md={6}>
            <img
              src={
                process.env.NEXT_PUBLIC_STRAPI_URL +
                excerptImage.formats.medium.url
              }
              alt="building the future together"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default IntroAbout;

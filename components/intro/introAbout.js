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
          <Col md={6} sm={12}>
            <h3>
              We create mission driven plans to advance social justice and
              support social change.
            </h3>
            <p>
              Every day millions of people do things to make life better for
              other people. Our goal is to support that process by helping
              people and organizations understand their data. We offer three
              paths to guide this process…
            </p>
            <p>Strategic Planning | Data Strategy | Evaluation</p>
            <p>Are you ready to get the scoop on your data?</p>
            <div className="my-4">
              <OrangeButton>
                <Link href="/about">
                  <a> Read About Us </a>
                </Link>
              </OrangeButton>
            </div>
          </Col>
          <Col md={6} sm={12} className="mt-sm-5 mt-xs-5">
            <img src={excerptImage.url} alt="building the future together" />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default IntroAbout;

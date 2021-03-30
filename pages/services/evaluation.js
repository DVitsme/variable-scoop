import React from "react";
import ReactMarkdown from "react-markdown";

import data from "../../components/data/services.json";
import { Row, Col, Container as ReactstrapContainer } from "reactstrap";

import TitleArea from "../../components/services/titleArea";
import styled from "styled-components";
import ServiceCards from "../../components/services/serviceCards";

// <TitleArea pageTitle={service.Title} />
//         <ReactMarkdown source={service.approach} />

const StrategicPlanning = () => {
  const {
    approaches,
    quote,
    additional_services,
    body,
    bodyImage,
    quoteAuthor,
    approachTitle,
    title,
  } = data.Evaluation;

  return (
    <Container>
      <h1>{title}</h1>
      <img src="/images/services/evaluation/hero.jpeg" alt="Eval image" />

      <Row>
        <Col>
          <blockquote className="blockquote">
            <p className="mb-0">{quote}</p>
            <footer className="blockquote-footer">
              <cite title="Source Title">{quoteAuthor}</cite>
            </footer>
          </blockquote>
        </Col>
      </Row>
      <ReactMarkdown source={body} />
      <Row style={{ marginLeft: 0 }}>
        <ApproachTitle>
          <ReactMarkdown source={approachTitle} />
        </ApproachTitle>
        <Col md={6}>
          <Row>
            {approaches.map((approach) => (
              <ServiceCards key={approach._id} approach={approach} />
            ))}
          </Row>
        </Col>
        <Col md={6}>
          <img
            src="/images/vectors/three_people_talking.jpg"
            alt="Eval image"
          />
        </Col>
      </Row>

      <AdditionalServices>
        <Row>
          <h4>Additional Services Include:</h4>
          {additional_services.map((service) => (
            <Col md={3} key={service._id}>
              <p>{service.title}</p>
            </Col>
          ))}
        </Row>
      </AdditionalServices>
    </Container>
  );
};

const Container = styled(ReactstrapContainer)`
  h1 {
    font-size: 40px;
    line-height: 1.2;
    margin-bottom: 9px;
    padding-top: 34px;
  }
  img {
    border-radius: 5px 5px 5px 5px;
    height: auto;
    max-width: 100%;
    width: 100%;
    border: none;
    box-shadow: none;
  }
  blockquote {
    margin: 5.5rem 0;
    text-align: center;
    font-size: 4.5rem;
    p {
      font-size: 5.5rem;
      font-weight: 500;
    }
    .blockquote-footer {
      text-align: right;
    }
  }
  h1 {
    font-size: 7rem;
    line-height: 1.2;
    margin-bottom: 2rem;
    padding-top: 3.5rem;
  }
  h4 {
    margin: 4rem 0 2rem;
  }
  p {
    font-size: 2rem;
    line-height: 1.9;
    margin-bottom: 2rem;
  }
`;

const AdditionalServices = styled.section`
  .row {
    h4 {
      width: 100%;
    }
    p {
      color: ${(props) => props.theme.faded};
      font-weight: 500;
      font-size: 2rem;
    }
  }
`;

const ApproachTitle = styled.div`
  margin-bottom: 1.5rem;
  h4 {
    width: 100%;
  }
`;

export default StrategicPlanning;

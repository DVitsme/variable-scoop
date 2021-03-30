import React from "react";
import styled from "styled-components";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col as ReactstrapCol,
  Row,
} from "reactstrap";

const ServiceCards = ({ approach: { title, body } }) => {
  // const data = approach.split("\n");
  // const header = data.shift();
  // console.log(data[0].split("**"));
  // const cardSize = Math.floor(12 / data.length);
  return (
    <Col md={6}>
      <h4>{title}</h4>
      <p>{body}</p>
    </Col>
  );
};

export default ServiceCards;

const Col = styled(ReactstrapCol)`
  background-color: ${(props) => props.theme.white};
  color: rgb(35, 35, 37);
  h4 {
    margin: 0px 0px 7px;
    font-size: 2rem;
  }
  p {
    font-size: 1.4rem;
  }
`;

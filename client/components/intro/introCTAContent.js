import React from "react";
import {
  Col as ReactstrapCol,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import styled from "styled-components";
import ImageWrapper from "../utils/ImageWrapper";

const Col = styled(ReactstrapCol)`
  &:hover {
    box-shadow: 0px 10px 10px 10px rgba(0, 0, 0, 0.05);
  }
  &:not(:last-child) {
    border-right: 1px solid ${(props) => props.theme.borderColor};
  }
`;
const ContentWrapper = styled.div`
  padding: 6.2rem 4rem 3.5rem 4rem;
  background-color: #fff;
  h3 {
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 18px 0;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  p {
    font-size: 16px;
    font-weight: 300;
  }
`;

const IntroCTAContent = ({ data, index }) => {
  const { title, content, slug, excerpt, excerptImage, id } = data;
  return (
    <Col md={4}>
      <ContentWrapper>
        {index > 0 && (
          <img
            src={process.env.NEXT_PUBLIC_STRAPI_URL + excerptImage.url}
            alt={title}
          />
        )}
        <h3>{title}</h3>
        <p>{excerpt}</p>
        {index === 0 && (
          <img
            src={process.env.NEXT_PUBLIC_STRAPI_URL + excerptImage.url}
            alt={title}
          />
        )}
      </ContentWrapper>
    </Col>
  );
};

export default IntroCTAContent;

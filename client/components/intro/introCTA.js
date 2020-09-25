import React from "react";
import styled from "styled-components";
import { Row as ReactstrapRow, Container, Col } from "reactstrap";
import IntroCTAContent from "./introCTAContent";

import { whatSetsUsApart } from "../../data";

const CTAWrapper = styled.div`
  img {
    width: 100%;
    max-width: 100%;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  margin-top: -6.6%;
  margin-bottom: 0%;
  z-index: 10;
  position: relative;
`;
const CardWrapper = styled(ReactstrapRow)`
  box-shadow: 0px 0px 79px 30px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin-top: -17%;
  z-index: 11;
  position: relative;
`;

const ContentWrapper = styled.div`
  @media screen and (min-width: 1100px) {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const IntroCTA = ({ data = [] }) => {
  return (
    <CTAWrapper>
      <ImgWrapper>
        <img src="/images/hero/hero_under_image.png" alt="" />
      </ImgWrapper>
      <Container>
        <CardWrapper>
          {data.map((card, index) => (
            <IntroCTAContent data={card} key={card.id} index={index} />
          ))}
        </CardWrapper>
      </Container>
    </CTAWrapper>
  );
};

export default IntroCTA;

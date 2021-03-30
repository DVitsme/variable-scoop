import React from "react";
import styled from "styled-components";
import { Row as ReactstrapRow, Container, Col } from "reactstrap";
import IntroCTAContent from "./introCTAContent";

// import { whatSetsUsApart } from "../../data";

const CTAWrapper = styled.div`
  margin-top: -10%;
  img {
    width: 100%;
    max-width: 100%;
  }
`;

const CardWrapper = styled(ReactstrapRow)`
  box-shadow: 0px 0px 79px 30px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;

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

const IntroCTA = ({ data }) => {
  const { StrategicPlanning, Evaluation, DataStrategy } = data;
  return (
    <CTAWrapper>
      <Container>
        <CardWrapper>
          <IntroCTAContent data={StrategicPlanning} index={0} />
          <IntroCTAContent data={Evaluation} index={1} />
          <IntroCTAContent data={DataStrategy} index={2} />
        </CardWrapper>
      </Container>
    </CTAWrapper>
  );
};

export default IntroCTA;

import Link from "next/link";
import React from "react";
import { Col } from "reactstrap";
import styled from "styled-components";

const FooterAbout = () => {
  return (
    <Col md={5}>
      <LogoWrapper>
        <Link href="/">
          <a>
            <img src="/images/logo/logo.png" alt="Variable Scoop" />
          </a>
        </Link>
      </LogoWrapper>
      <AboutContent>
        Valentine Consulting, established in 1996, is doing business as Variable
        Scoop. We promote the ethical use of data strategy, strategic planning
        and evaluation as tools for positive social change and transformation.
      </AboutContent>
    </Col>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  img {
    width: 100%;
    height: auto;
    margin: 0 0 25px 0;
    vertical-align: top;
  }
`;
const AboutContent = styled.p`
  color: ${(props) => props.theme.lightBlack};
  font-size: 1.6rem;
  font-weight: 300;
`;
// PO Box 256 Spencervile Maryland 20868
export default FooterAbout;

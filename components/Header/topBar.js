import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const TopBar = ({ hide }) => {
  return (
    <TopBarWrapper hide={hide}>
      <Container>
        <Row>
          <ContactInfo lg={6}>
            <ContentWrapper>
              <p>
                <i className="fa fa-phone" />
                <a href="tel:+12404018975">+1 240 401 8975</a>
              </p>
              <p>
                <i className="fa fa-envelope" />
                <a href="mailto:dawn@variablescoop.com">
                  dawn@variablescoop.com
                </a>
              </p>
            </ContentWrapper>
          </ContactInfo>
          <SocialMedia lg={6}>
            <IconWrapper>
              <a href="https://medium.com/@variablescoop" target="_blank">
                <i className="fa fa-medium" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/variablescoop"
                target="_blank"
              >
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
              <a href="https://twitter.com/VariableScoop" target="_blank">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
              <a href="https://www.facebook.com/variablescoop" target="_blank">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </IconWrapper>
          </SocialMedia>
        </Row>
      </Container>
    </TopBarWrapper>
  );
};
const SocialMedia = styled(Col)`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const ContactInfo = styled(Col)`
  // since social media icons are hidden take up the whole space
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const TopBarWrapper = styled.section`
  // Super small screen hide everything
  @media only screen and (max-width: 500px) {
    display: none;
  }
  display: ${(props) => (props.hide ? "none" : "block")};
  border: 1px solid #f0eff3;
  border-width: 0px 0px 1px 0px;
  color: #696687;
  padding: 10px 0;
`;
const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  p {
    margin-right: 30px;
    i {
      margin-right: 10px;
      color: ${(props) => props.theme.blue};
    }
  }
`;
const IconWrapper = styled.div`
  float: right;
  display: flex;
  justify-content: end;
  height: 100%;
  align-items: center;
  a:hover {
    text-decoration: none;
  }
  i {
    width: 1em;
    height: 1em;
    position: relative;
    display: block;
    margin: 0 7.5px;
    color: ${(props) => props.theme.faded};
    &:hover {
      color: ${(props) => props.theme.orange};
    }
  }
`;

export default TopBar;

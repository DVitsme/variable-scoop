import React from "react";
import styled from "styled-components";

import { Col } from "reactstrap";

const TabTile = ({ tile: { title, description } }) => {
  return (
    <ContentContainer md={6}>
      <ContentWrapper>
        <ContentTitle>
          <p>{title}</p>
        </ContentTitle>
        <p>{description}</p>
      </ContentWrapper>
      <hr />
    </ContentContainer>
  );
};

export default TabTile;

const ContentContainer = styled(Col)`
  margin-bottom: 27px;
  padding-bottom: 2rem;
  hr {
    color: rgba(105, 102, 135, 0.1);
    height: 1px;
    margin: 2.5rem 2rem 0px;
  }
`;

const ContentWrapper = styled.div``;
const ContentTitle = styled.div`
  ::before {
    content: "";
    min-width: 2em;
    height: 2em;
    line-height: 2;
    text-align: center;
    background: #e4e4e4;
    float: left;
    margin-top: -0.3em;
    margin-bottom: 0.5em;
    margin-right: 15px;
    border-radius: 4px;
    background-color: #f0ac0e;
    color: #ffffff;
  }
  padding: 10px 0px 12px 0px;
  p {
    color: #3b3663;
    font-size: 3rem;
    font-weight: bold;
    line-height: 27px;
    letter-spacing: 0px;
  }
`;

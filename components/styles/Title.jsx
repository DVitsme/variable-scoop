import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <TitleContainer>
      <h1>{title}</h1>
    </TitleContainer>
  );
};

export default Title;

const TitleContainer = styled.div`
  margin-bottom: 2rem;
  padding-top: 3.5rem;
  width: 100%;
  h1 {
    font-size: 7rem;
    line-height: 1.2;
  }
`;

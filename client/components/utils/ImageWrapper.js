import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  img {
    height: auto;
    max-width: 100%;
  }
`;

const ImageWrapper = ({ imgSrc }) => {
  return (
    <ImageContainer>
      <img src={imgSrc} />
    </ImageContainer>
  );
};

export default ImageWrapper;

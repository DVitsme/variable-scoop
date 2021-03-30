import React from "react";
import styled from "styled-components";

const ImgWrapper = () => {
  return (
    <Wrapper>
      <img src="/images/hero/hero_under_image.png" alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    width: 100%;
    max-width: 100%;
  }
  width: 100%;
  margin-top: -6.6%;
  margin-bottom: 0%;
  z-index: 10;
  position: relative;
`;
export default ImgWrapper;

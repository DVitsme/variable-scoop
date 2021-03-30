import React from "react";
import {
  Breadcrumb as ReactstrapBreadcrumb,
  BreadcrumbItem,
  Container as ReactstrapContainer,
} from "reactstrap";
import styled from "styled-components";
import Link from "next/link";

const TitleArea = ({ pageTitle }) => {
  return (
    <BackgroundHero>
      <Container>
        <h3>{pageTitle}</h3>
        <Breadcrumb tag="nav" listTag="div">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/services">
            <a>Services</a>
          </Link>
          <a>{pageTitle}</a>
        </Breadcrumb>
      </Container>
    </BackgroundHero>
  );
};

const BackgroundHero = styled.div`
  background-image: url("/images/backgrounds/serviceBackground.jpg");
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
  height: 260px;
`;
const Container = styled(ReactstrapContainer)`
  text-align: center;
  width: 100%;
  display: block;
  padding: 7rem 0;
  h3 {
    padding-bottom: 5px;
    color: ${(props) => props.theme.white};
  }
`;

const Breadcrumb = styled(ReactstrapBreadcrumb)`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.white};
  .breadcrumb {
    background-color: transparent;
  }
  .active {
    font-weight: 700;
    color: ${(props) => props.theme.white};
  }
`;
export default TitleArea;

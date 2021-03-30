import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Navigation from "./Navigation.jsx";
import Meta from "./Meta";

import Footer from "../Footer/index";

const theme = {
  primary: "rgba(153,168,51,1)",
  black: "rgba(17,17,17,1)",
  gray: "rgba(70,74,76,1)",
  orange: "rgba(246, 114, 0, 1)",
  blue: "rgb(87, 71, 228)",
  faded: "rgb(105, 102, 135)",
  white: " rgb(255, 255, 255)",
  lightGray: "rgba(245,248,248,1)",
  lightBlack: "rgba(30, 37, 47, 1)",
  lightPurple: "rgb(59, 54, 99)",
  darkGreen: "rgb(133,148,31)",
  offWhite: "#EDEDED",
  borderColor: "rgb(230, 233, 238);",
  maxWidth: "1000px",
  boldTitle: "700",
};

const StyledPage = styled.div`
  background: white;
  color: ${(props) => props.theme.black};
`;

// changed bootstrap .container-fluid from just padding: 0 15px && margin: 0 auto; to add a width of 1366px;
const GlobalStyle = createGlobalStyle`
@media (min-width:1200px) {
     .container-fluid {
        width: 1366px;
    }
}
  html {
    font-family: sans-serif;
    line-height: 1.15;
    box-sizing: border-box;
    font-size: 10px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-family:'Lato';
    font-weight:300;
    background: ${theme.white};
    font-size: 18px;
    line-height: 30px;
    color: ${theme.lightBlack};
  }
h1,h2,h3 {
  font-family: "Josefin Sans", Sans-serif;
  color: ${theme.black};
}
h1{
    font-weight:400;
    text-transform:none;
    font-size:7.425rem;
    letter-spacing:-0.05em;
}
h2{
    font-weight:300;
    text-transform:none;
    font-size:5.85rem;
    letter-spacing:-0.04em
}
h3{
     
    font-weight:normal;
    text-transform:none;
    font-size:4.5rem;
    letter-spacing:-0.04em
}
h4,.h4{
     
    font-weight:normal;
    text-transform:none;
    font-size:2.7rem;
    letter-spacing:-0.04em
}
h5,.h5{
    color: ${theme.gray};
     
    font-weight:normal;
    text-transform:uppercase;
    font-size:2.25rem;
    letter-spacing:0.08em;
    line-height: 1.25;
}
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class SiteTheme extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Navigation />
          <GlobalStyle />
          {this.props.children}
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default SiteTheme;

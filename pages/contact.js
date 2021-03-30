import React from "react";
import styled from "styled-components";
import Head from "next/head";

import { Container, Row, Col } from "reactstrap";

import Title from "../components/styles/Title";
import ImageWrapper from "../components/utils/ImageWrapper";

const Contact = () => {
  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
        ></script>
      </Head>
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <TitleAreaWrapper>
              <h3>Get in touch and let us know how we can help.</h3>
              <p>
                We still believe in customer service, and we love our work
                please feel free to answer questions or have a chat, just give
                us about 24 hours to respond.
              </p>
            </TitleAreaWrapper>
          </Col>
        </Row>
        <Row>
          <ImageWrapper imgSrc="/images/vectors/contacts_01.jpg" />
        </Row>
        <Row>
          <Col md={6}>
            <ContactContentWrapper>
              <p className="subTitle">GET IN TOUCH</p>
              <h3 className="title">Contact Us </h3>
              <p className="body">
                Ready to get started? Have a few questions? Give us a call,
                Schedule us with an email, or use the calendar on the right to
                schedule a complimentary consulting call Today!
              </p>
              <p className="sectionTitle">
                <span>Phone:</span> <i className="fa fa-phone" />
                <a href="tel:+88002534236">+1 240 401 8975</a>
              </p>
              <p className="sectionTitle">
                <span>Send Email:</span>

                <i className="fa fa-envelope" />
                <a href="mailto:email@yoursite.com">dawn@variablescoop.com</a>
              </p>
              <p className="sectionTitle">
                <span>Schedule Directly With My Calendar:</span>
                <WovenButton />
              </p>
            </ContactContentWrapper>
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

const WovenButton = () => {
  return (
    <div
      id="woven_button"
      className="woven_button_2 my-3 mb-3"
      style={{ marginBottom: "6px" }}
    >
      <a
        href="https://woven.com/c/dawnvalentine/VariableScoop"
        style={{ textDecoration: "none" }}
      >
        <table
          cellSpacing="0"
          cellPadding="0"
          style={{
            boxShadow: "0px 1px 4px rgba(43, 44, 49, 0.25)",
            borderRadius: "6px",
            margin: "0 2px",
            backgroundColor: "#fff",
          }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  padding: "8px 12px",
                  color: "#2B2C31",
                  fontWeight: "500",
                }}
              >
                <img
                  src="https://storage.googleapis.com/pulsra-6x3zjmdpzbyevp7hv2obm8bs8xvgj5pcbygycyepup/schedule-with-woven-3x.png"
                  style={{ marginRight: "8px", width: "11px" }}
                />
                Schedule VariableScoop
              </td>
            </tr>
          </tbody>
        </table>
      </a>
    </div>
  );
};
const TitleAreaWrapper = styled.div`
  padding-top: 70px;
  padding-bottom: 10px;
  text-align: center;
  h3 {
    margin-bottom: 15px;
    text-transform: capitalize;
  }
  p {
  }
`;

const ContactContentWrapper = styled.div`
  padding: 10px;
  margin-right: 5rem;
  margin-top: 5rem;
  color: ${(props) => props.theme.lightPurple};
  .subTitle {
    font-weight: 700;
    font-size: 14px;
    line-height: 30px;
    text-transform: capitalize;
  }
  .title {
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.8rem;
    margin-bottom: 14px;
  }
  .body {
    font-weight: 400;
    font-size: 18px;
    line-height: 2.7rem;
    margin-bottom: 3rem;
    color: ${(props) => props.theme.faded};
  }
  .sectionTitle {
    font-weight: 700;
    font-size: 16px;
    line-height: 25.6px;
    padding-bottom: 16px;
    span {
      display: block;
    }
    i {
      margin-right: 10px;
    }
    a {
      color: ${(props) => props.theme.blue};
    }
  }
`;

export default Contact;

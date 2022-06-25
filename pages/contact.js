import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import { Container, Row, Col, Button } from 'reactstrap';

import Title from '../components/styles/Title';
import ImageWrapper from '../components/utils/ImageWrapper';

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
          <Col md={8}>
            <ContactContentWrapper>
              <p className="subTitle">GET IN TOUCH</p>
              <h3 className="title">Contact Us </h3>
              <p className="body">
                Ready to get started? Have a few questions? Give us a call,
                Schedule us with an email, or use the calendar on the below to
                schedule a complimentary consulting call today!
              </p>
            </ContactContentWrapper>
          </Col>
          <Col md={4}>
            <ContactContentWrapper>
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
                <a href="https://www.calendar.com/the-planning-zone/consultation-for-better-programs/">
                  <span>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    Schedule Here
                  </span>
                </a>
              </p>
            </ContactContentWrapper>
          </Col>
        </Row>
      </Container>
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

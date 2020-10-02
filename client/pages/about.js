import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { Container as ReactstrapContainer, Row, Col } from 'reactstrap';
import { fetchAPI } from '../components/utils/api';

import styled from 'styled-components';
import { BoldFirstWord } from '../components/styles/BoldWord.component';

const Container = styled(ReactstrapContainer)`
  width: 100% !important;
`;

const ImageLeft = styled(Col)`
  background-image: ${(props) =>
    `url(${process.env.NEXT_PUBLIC_STRAPI_URL + props.image.url})`};
  background-position: center center;
  background-size: cover;
  padding: 8% 8% 8% 8%;
`;
const ContentRight = styled(Col)`
  padding: 0 5%;
  h3 {
    text-transform: uppercase;
    margin-top: 40px;
  }
`;
const About = ({ getAbout }) => {
  const {
    title,
    bodySubHeaderOne,
    bodyContentOne,
    bodySubheaderTwo,
    bodyContentTwo,
    bodyImage,
  } = getAbout;
  return (
    <Container fluid>
      <Row>
        <ImageLeft md={6} image={bodyImage}></ImageLeft>
        <ContentRight md={6}>
          <BoldFirstWord content={bodySubHeaderOne} />
          <ReactMarkdown source={bodyContentOne} />
          <hr />
          <BoldFirstWord content={bodySubheaderTwo} />
          <ReactMarkdown source={bodyContentTwo} />
        </ContentRight>
      </Row>
    </Container>
  );
};

export default About;

export async function getStaticProps(context) {
  const getAbout = await fetchAPI('about');
  return {
    props: { getAbout },
  };
}

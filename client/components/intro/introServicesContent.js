import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Col as ReactStrapCol } from 'reactstrap';
import styled from 'styled-components';

const Col = styled(ReactStrapCol)`
  :hover {
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 10px 10px 10px rgba(0, 0, 0, 0.05);
  }

  img {
    width: 75px;
    height: 75px;
  }
  h4 {
    padding-top: 15px;
  }
  p {
    padding: 0 9px;
  }
`;

const IntroServicesContent = ({ services }) => {
  const { title, description, image } = services;
  return (
    <Col md={4}>
      <div>
        <img src={process.env.NEXT_PUBLIC_STRAPI_URL + image.url} alt={title} />
      </div>
      <h4>{title}</h4>
      <ReactMarkdown source={description} />
    </Col>
  );
};

export default IntroServicesContent;

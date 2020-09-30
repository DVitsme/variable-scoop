import React from 'react';
import styled from 'styled-components';
import { Row, Col as ReactstrapCol } from 'reactstrap';

const Col = styled(ReactstrapCol)`
  :first-child {
    padding: 7px 0px 6px 0px;
    border-style: solid;
    border-width: 0px 1px 0px 0px;
    border-color: #c1c3c6;
  }
  margin-bottom: 3rem;
  h3 {
    font-family: 'Lato';
    font-size: 3.8rem;
  }
  p {
    font-size: 16px;
    line-height: 24px;
  }
`;

const IntroDifferencesContent = ({ content }) => {
  const { title, body } = content;
  return (
    <Row>
      <Col sm={4} className="title">
        <h3>{title}</h3>
      </Col>
      <Col sm={8}>
        <p>{body}</p>
      </Col>
    </Row>
  );
};

export default IntroDifferencesContent;

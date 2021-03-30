import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

import { Col as ReactStrapCol } from "reactstrap";
import styled from "styled-components";

const Col = styled(ReactStrapCol)`
  :hover {
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 10px 10px 10px rgba(0, 0, 0, 0.05);
  }
  a:hover {
    color: inherit;
  }
  margin: 1.5rem 0;
  .imgContainer {
    margin-top: 15px;
  }
  img {
    width: 75px;
    height: 75px;
  }
  h4 {
    padding-top: 15px;
  }
  a {
    :hover {
      text-decoration: none;
    }
  }
  p {
    padding: 0 9px;
  }
`;

const IntroServicesContent = ({ services }) => {
  const { title, description, image } = services;
  // as I am doing this, this seems like a heavy split consider changing over to a regex in the near future.
  const limitedDesc = description.split("").slice(0, 150).join("") + "...";
  return (
    <Col md={4}>
      <Link href="/toolbox">
        <a>
          <div className="imgContainer">
            <img src={image.url} alt={title} />
          </div>
          <h4>{title}</h4>
          <ReactMarkdown source={limitedDesc} />
        </a>
      </Link>
    </Col>
  );
};

export default IntroServicesContent;

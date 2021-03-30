import React from "react";
import Link from "next/link";
import { Col as ReactstrapCol } from "reactstrap";
import styled from "styled-components";

const FooterLinks = ({ data: { footerLink, title }, index }) => {
  return (
    <Col md={index !== 2 ? 2 : 3}>
      <h4>{title}</h4>
      <ul>
        {footerLink.map((location, index) => (
          <li key={index}>
            {location.icon !== undefined && (
              <i className={`fa fa-${location.icon}`} />
            )}
            <Link href={location.URL}>
              <a>{location.body}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Col>
  );
};

const Col = styled(ReactstrapCol)`
  padding: 0 3rem;
  h4 {
    padding-bottom: 27px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 700;
  }
  ul {
    display: block;
    list-style: none;
    padding-left: 0;
    font-weight: 300;
    font-size: 15px;
    text-transform: capitalize;
    li {
      padding-bottom: 2px;
      margin-bottom: 10px;
      color: rgb(173, 183, 195);
      display: flex;
      align-items: center;
      i {
        margin-right: 15px;
        font-size: 3rem;
        font-weight: 900;
      }
      a {
        :hover {
          border-bottom: 1px solid ${(props) => props.theme.blue};
        }
        text-decoration: none;
      }
    }
  }
`;

export default FooterLinks;

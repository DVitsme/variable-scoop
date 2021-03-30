import styled from "styled-components";
import { Button } from "reactstrap";

const StyledButton = styled(Button)`
  background-color: ${(props) =>
    props.white ? props.theme.white : props.theme.orange};
  color: ${(props) =>
    props.white ? props.theme.lightBlack : props.theme.white};
  font-weight: ${(props) => (props.color === "white" ? 300 : 400)};
  line-height: 26px;
  letter-spacing: 0px;
  border-color: transparent;
  border-style: none;
  border-radius: 0;
  padding: 11px 32px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  i {
    color: ${(props) => (props.white ? props.theme.orange : props.theme.white)};
    margin-left: 10px;
    font-size: 1.5rem;
  }
  &:hover {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.orange};
    border: ${(props) =>
      props.white ? "none" : `1px solid ${props.theme.orange}`};
    text-decoration: none;
    i {
      color: ${(props) =>
        props.white ? props.theme.white : props.theme.orange};
    }
  }
`;

export const WhiteButton = ({ children }) => {
  return (
    <StyledButton white="true">
      {children} <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    </StyledButton>
  );
};

export const OrangeButton = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

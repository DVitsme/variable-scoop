import React, { useState } from "react";
import styled from "styled-components";
import {
  Collapse,
  Navbar as ReactstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { useRouter } from "next/router";

const Navigation = (props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  console.log(router);
  return (
    <Navbar expand="md">
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>Simple Text</NavbarText>
      </Collapse>
    </Navbar>
  );
};

const Navbar = styled(ReactstrapNavbar)`
  position: ${() => {
    if (useRouter().pathname === "/") return "absolute";
    return "relative";
  }};
  /* position: absolute; */
  /* router.pathname === "/" ? absolute : relative */
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: ${() => {
    if (useRouter().pathname === "/") return "transparent";
    return "rgba(49,53,55,1)";
  }};
  border: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  a,
  li,
  span {
    color: ${(props) => props.theme.white} !important;
  }
`;

export default Navigation;

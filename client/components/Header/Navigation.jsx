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
import Link from "next/link";

const Navigation = (props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar expand="md">
      <NavbarBrand href="/">Variable Scoop</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link href="/about">
              <NavLink>About</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/">
              <NavLink>GitHub</NavLink>
            </Link>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Services
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Strategic Planning</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Evaluation</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Data Strategy</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <Link href="/contact">
              <NavLink>Contact</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

const Navbar = styled(ReactstrapNavbar)`
  position: ${() => {
    if (useRouter().pathname === "/") return "absolute";
    return "relative";
  }};

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

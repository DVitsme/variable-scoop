import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Collapse as ReactstrapCollapse,
  Navbar as ReactstrapNavbar,
  NavbarToggler as ReactstrapNavbarToggler,
  NavbarBrand as ReactstrapNavbarBrand,
  Nav,
  NavItem,
  NavLink as ReactstrapNavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import Link from "next/link";
import styled from "styled-components";

import TopBar from "./topBar";

const Navigation = (props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <React.Fragment>
      <TopBar hide={useRouter().pathname === "/"} />
      <Navbar expand="md">
        <Container>
          <NavbarBrand href="/">Variable Scoop</NavbarBrand>
          <NavbarToggler onClick={toggle} type="white" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="/about">
                  <NavLink>About</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/toolbox">
                  <NavLink>Toolbox</NavLink>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Services
                </DropdownToggle>
                <DropdownMenu right>
                  <Link href="/services/[id]" as="/services/strategic-planning">
                    <DropdownItem>Strategic Planning</DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <Link href="/services/[id]" as="/services/evaluation">
                    <DropdownItem>Evaluation</DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <Link href="/services/data-strategy">
                    <DropdownItem>Data Strategy</DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link href="/contact">
                  <NavLink>Contact</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

const NavLink = styled(ReactstrapNavLink)`
  margin: 0 7px;
  cursor: pointer;
`;

const NavbarToggler = styled(ReactstrapNavbarToggler)`
  border: ${() => {
    if (useRouter().pathname === "/")
      return "1px solid rgba(255, 255, 255, 0.5)";
  }};
  background-image: ${() => {
    if (useRouter().pathname === "/")
      return `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`;
    else
      return `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;
  }};
`;

const NavbarBrand = styled(ReactstrapNavbarBrand)`
  font-size: 2rem;
  font-weight: 500;
`;

const Navbar = styled(ReactstrapNavbar)`
  position: ${() => {
    if (useRouter().pathname === "/") return "absolute";
    return "relative";
  }};
  background-color: ${(props) => {
    if (useRouter().pathname === "/") return "transparent";
    return props.theme.white;
  }};
  a,
  li,
  span {
    color: ${(props) => {
      if (useRouter().pathname === "/") return props.theme.white;
      return props.theme.gray;
    }} !important;
  }
  top: 0;
  width: 100%;
  z-index: 100;
  border: 0;
  padding: 20px 0;
  box-shadow: none;
`;

const Collapse = styled(ReactstrapCollapse)`
  background-color: ${(props) => {
    if (props.isOpen) return "rgba(0, 0, 0, 0.9)";
  }};
  padding: ${(props) => {
    if (props.isOpen) return "2rem";
  }};
`;

export default Navigation;

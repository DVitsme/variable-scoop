import React, { useState } from "react";
import {
  Collapse,
  Navbar,
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

import Link from "next/link";

const TestAlone = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
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
                <Link href="/services/[id]" as="/services/strategic-planning">
                  <DropdownItem>Strategic Planning</DropdownItem>
                </Link>
                <DropdownItem divider />
                <Link href="/services/[id]" as="/services/evaluation">
                  <DropdownItem>Evaluation</DropdownItem>
                </Link>
                <DropdownItem divider />
                <Link href="/services/[id]" href="/services/data-strategy">
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
      </Navbar>
    </div>
  );
};

export default TestAlone;

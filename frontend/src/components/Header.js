import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand>Green Market</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
          <LinkContainer to='/cart'>
              <Nav.Link>
                <ShoppingCartIcon className="mr-1" />
                Cart
              </Nav.Link>
          </LinkContainer>
          <LinkContainer to='/login'>
              <Nav.Link href="/login">
                <AccountCircleIcon className="mr-1" />
                Sign In
              </Nav.Link>
          </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

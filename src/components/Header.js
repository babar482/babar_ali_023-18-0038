import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CompanyLogo from '../ass/images/footer-logo.svg.png'

const NavBar = () => {
  return (
    <>
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
            <img src={CompanyLogo} alt="logo" width={45} height={45}/><b> Writealy </b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-right flex-grow-1 pe-3">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="#action1"><b>Product - </b></Nav.Link>
            <Nav.Link href="#action2"><b>Use cases - </b></Nav.Link>
            <Nav.Link href="#action3"><b>Pricing</b></Nav.Link>
            <Nav.Link href="#action3"><b>Customer</b></Nav.Link>
            <Nav.Link href="#action3"><b>Resources - </b></Nav.Link>
          </Nav>
            <Button style={{backgroundColor: '#FFF0EC', color:'black', borderRadius: '30px', outlineColor: 'black'}}>Sign in</Button>
         </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;
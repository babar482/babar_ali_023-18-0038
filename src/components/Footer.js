import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
      <footer className="mt-5 bg-dark text-light py-4">
      <Container>
        <Row>
          {/* Contact Information */}
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              Email: babaralichanna18@gmail.com
              <br />
              Phone: +923153120946
            </p>
          </Col>

          {/* Useful Links */}
          <Col md={4}>
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light">Home</a></li>
              <li><a href="#about" className="text-light">About Us</a></li>
              <li><a href="#services" className="text-light">Services</a></li>
              <li><a href="#contact" className="text-light">Contact</a></li>
            </ul>
          </Col>

          {/* Copyright Information */}
          <Col md={4}>
            <h5>&copy; 2023 Your Company</h5>
            <p>All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    );
  }
  
  export default Footer;
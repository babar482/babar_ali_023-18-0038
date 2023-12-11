import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function ContectUs(){
    return(
        <>
        <div className="container contact">
      <h1 className="text-start mb-4">Contact Us</h1>
      <Form className="mx-auto">
        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Control placeholder="First name" />
          </Col>
          <Col xs={12} md={6} className="mt-3 mt-md-0">
            <Form.Control placeholder="Phone" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Control placeholder="Address" />
          </Col>
          <Col xs={12} md={6} className="mt-3 mt-md-0">
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12}>
            <Form.Control as="textarea" rows={3} placeholder="Your comment" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
        </>
        

    );
}
export default ContectUs;
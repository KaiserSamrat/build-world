import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import contact from "../../assets/images/contact.svg";
import Footer from "../../Components/WebSite/Footer";
import Header from "../../Components/WebSite/Header";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="Sign_in_form">
        <Container>
          <Row>
            <Col md="6" className="mb-5 form_inner">
              <p className="mb-1 custom_text_design">- Contact</p>
              <h3 className="mb-5">Contact Us</h3>
              <div className="pb-5">
                <Row>
                  <Col className="">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Type name"
                          name="name"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Type email"
                          name="email"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Type subject"
                          name="subject"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          placeholder="Type your message"
                        />
                      </Form.Group>

                      <div className="mt-5">
                        <Button type="submit" className="btn btn-default me-5">
                          Send Messege
                        </Button>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md="6">
              <img alt="image" src={contact} />
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Contact;

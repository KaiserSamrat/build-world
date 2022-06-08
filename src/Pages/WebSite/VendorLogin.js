import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../Components/WebSite/Footer";
import Header from "../../Components/WebSite/Header";

const VendorLogin = () => {
  return (
    <>
      <Header />
      <div className="vendor_wrapper">
        <Container>
          <Row>
            <Col>
              <Card className="form_inner">
                <Card.Body>
                  <Row className="p-5">
                    <h3 className="mb-5">
                      Welcome! Please Login to
                      <br /> continue.
                    </h3>
                    <Col md="6">
                      <Form>
                        <Form.Group className="mb-5">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Type email"
                            name="email"
                            style={{ width: "90%" }}
                          />
                        </Form.Group>

                        <Form.Group className="">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Type password"
                            name="password"
                            style={{ width: "90%" }}
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col md="6" style={{ marginTop: "23px" }}>
                      <Button
                        type="submit"
                        className="btn-default button-orange-padding"
                        style={{
                          width: "90%",
                        }}
                      >
                        Login
                      </Button>
                      <div className="mt-4">
                        <p>
                          {" "}
                          <Link
                            style={{
                              color: "#000000",
                              fontSize: "20px",
                              fontWeight: "300",
                            }}
                          >
                            Forgot Password?{" "}
                          </Link>
                        </p>
                      </div>
                      <h6
                        style={{
                          marginBottom: "23px",
                          textAlign: "center",
                          color: "#888888",
                        }}
                      >
                        or
                      </h6>
                      <Button
                        type="submit"
                        className="btn-default button-light"
                        style={{ width: "90%" }}
                      >
                        Create Account
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default VendorLogin;

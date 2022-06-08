import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../Components/WebSite/Footer";
import Header from "../../Components/WebSite/Header";
const Registration = () => {
  return (
    <>
      <Header />
      <div className="Sign_in_form">
        <Container>
          <p className="mb-1 custom_text_design">- Sign Up</p>
          <h3 className="mb-5">Create Account</h3>
          <Row>
            <Col className="col-md-8 offset-md-2  mb-5 form_inner">
              <div className="pb-5 ">
                <Row>
                  <Col className="col-md-8 offset-md-2">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Type name"
                          name="name"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Phone No.</Form.Label>
                        <Form.Control
                          type="phone"
                          placeholder="Type phone no."
                          name="phone"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Type email address"
                          name="email"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Create Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Type password"
                          name="password"
                        />
                      </Form.Group>

                      <div className="mt-5 form-check">
                        <input
                          className="form-check-input check_box"
                          type="checkbox"
                        />
                        <label className="form-check-label ms-2 mt-1">
                          I have read and agree to{" "}
                          <Link
                            to={"/admin-dashobard"}
                            style={{ color: "#000000", fontWeight: "bold" }}
                          >
                            terms & conditions
                          </Link>
                        </label>
                      </div>

                      <div className="mt-5 d-flex justify-content-between align-items-center">
                        <Button type="submit" className="btn btn-default me-5">
                          Create Account
                        </Button>
                        <Link
                          className="me-5"
                          to={"/signin"}
                          style={{
                            color: "#000000",
                            fontWeight: "bold",
                            fontSize: "20px",
                            textDecoration: "none",
                          }}
                        >
                          Login
                        </Link>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Registration;

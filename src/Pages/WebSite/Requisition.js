import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../Components/WebSite/Footer";
import Header from "../../Components/WebSite/Header";
const Requisition = () => {
  return (
    <>
      <Header />
      <Container className="requisition_form">
        <Row>
          <Col className="col-md-8 offset-md-2 mt-5 mb-5 form_inner">
            <Card className="form_inner_background">
              <Card.Body>
                <div className="pt-5 pb-5">
                  <h3 className="text-center mb-5">Requisition Form</h3>
                  <Row>
                    <Col className="col-md-8 offset-md-2">
                      <Form>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Type name"
                            name="name"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone No.</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Type phone"
                            name="phone"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Type email"
                            name="email"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Category</Form.Label>
                          <Form.Select>
                            <option>Select category</option>
                            <option>Category 1</option>
                            <option>Category 2</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Product Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Type product"
                            name="product"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Description (Optional)</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Type..."
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
                              style={{ fontWeight: "bold", color: "#000000" }}
                            >
                              terms & conditions
                            </Link>
                          </label>
                        </div>
                        <Button
                          type="submit"
                          className="btn btn-default mt-5"
                          style={{ width: "100%" }}
                        >
                          Submit
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Requisition;

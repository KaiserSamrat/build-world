import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../Components/WebSite/Footer";
import Header from "../../Components/WebSite/Header";
import { registerUser } from "../../Store/register/actions";
const Registration = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [role, setRole] = useState("")
  const handleSubmit = (e) =>{
    e.preventDefault()
    let body = {
      name: name,
      email:email,
      phoneNumber: phone,
      password: password,
      passwordConfirm: passwordConfirm,
      role: role
    }
    dispatch(registerUser(body, history))
  }
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
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                        onChange={(e) => setName(e.target.value)}
                          type="text"
                          placeholder="Type name"
                          name="name"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Phone No.</Form.Label>
                        <Form.Control
                         onChange={(e) => setPhone(e.target.value)}
                          type="phone"
                          placeholder="Type phone no."
                          name="phone"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                         onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          placeholder="Type email address"
                          name="email"
                        />
                        
                        <Form.Group className="mb-3">
                          <Form.Label>Role</Form.Label>
                          <Form.Select  onChange={(e) => setRole(e.target.value)}>
                            <option>Select Role</option>
                            <option value="BUYER">Buyer </option>
                            <option value="SELLER">Seller</option>
                            <option value="ADMIN">ADMIN</option>
                          </Form.Select>
                        </Form.Group>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Type password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Password Confirm</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="confirm password"
                          onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                      </Form.Group>

                

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

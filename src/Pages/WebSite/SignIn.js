import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../Components/WebSite/Footer";
import Header from "../../Components/WebSite/Header";
import { loginUser } from "../../Store/login/actions";
const SignIn = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) =>{
   
    e.preventDefault()
    let body = {
      id: email,
     
      password: password,
      
    }
    dispatch(loginUser(body, history))
  }
  return (
    <>
      <Header />
      <div className="Sign_in_form">
        <Container>
          <p className="mb-1 custom_text_design">- Login</p>
          <h3 className="mb-5">Login to Your Account</h3>
          <Row>
            <Col className="col-md-8 offset-md-2  mb-5 form_inner">
              <div className="pb-5 ">
                <Row>
                  <Col className="col-md-8 offset-md-2">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Type email"
                          name="email"
                          onChange={(e)=>setEmail(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Type password"
                          name="password"
                          onChange={(e)=>setPassword(e.target.value)}
                        />
                      </Form.Group>

                      <div className="mt-5 form-check">
                        <input
                          className="form-check-input check_box"
                          type="checkbox"
                        />
                        <label className="form-check-label ms-2 mt-1">
                          Remember me
                        </label>
                      </div>
                      <Button
                        type="submit"
                        className="btn btn-default mt-5"
                        style={{ width: "100%" }}
                      >
                        Login
                      </Button>
                    </Form>
                    <Row>
                      <Col className="col-md-10 offset-md-1">
                        <div className="d-flex justify-content-between align-items-center mt-5">
                          <div>
                            <p>
                              {" "}
                              <Link
                                style={{
                                  color: "#000000",
                                  fontSize: "20px",
                                  textDecoration: "none",
                                  fontWeight: "bold",
                                }}
                                to={"/registration"}
                              >
                                Create Account
                              </Link>
                            </p>
                          </div>
                          <div>
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
                        </div>
                      </Col>
                    </Row>
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

export default SignIn;

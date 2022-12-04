import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../Components/WebSite/Footer";
import Header from "../../Components/WebSite/Header";
import { loginUser } from "../../Store/login/actions";
import { createShop } from "../../Store/Product/actions";

const ShopCreate = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [about, setAbout] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
 
  const { authToken , loginId} = useSelector((state) => ({
    authToken: state.loginReducer.token,
    loginId: state.loginReducer.id,
    // adding: state.coupon.adding,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = {
        ownerId: loginId,
        name: name,
        email: email,
        phoneNumber: phone,
        aboutShop:about,
        address: address,
        city: city
    };
    console.log('body', body);
    dispatch(createShop(body, history, authToken));
  };
  return (
    <>
      <Header />
      <div className="Sign_in_form">
        <Container>
          <p className="mb-1 custom_text_design">- Shop</p>
          <h3 className="mb-5">Create Shop</h3>
          <Row>
            <Col className="col-md-8 offset-md-2  mb-5 form_inner">
              <div className="pb-5 ">
                <Row>
                  <Col className="col-md-8 offset-md-2">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label> Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Type Shop Name"
                          name="category"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label> Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Type Email"
                          name="category"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label> Phone Number</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Type Phone number"
                          name="category"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label> About</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Type About"
                          name="category"
                          onChange={(e) => setAbout(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label> Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Type Address"
                          name="category"
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label> City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Type City"
                          name="category"
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </Form.Group>


                     
                  
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
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default ShopCreate;

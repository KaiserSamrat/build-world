import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../Components/WebSite/Footer";
import Header from "../../Components/WebSite/Header";
import { loginUser } from "../../Store/login/actions";
import { createCategory } from "../../Store/Product/actions";
const CreateCategory = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const { authToken, adding } = useSelector((state) => ({
    authToken: state.loginReducer.token,
    adding:  state.ProductReducer.adding,
    
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = {
      categoryName: category,
    };
    dispatch(createCategory(body, history, authToken));
  };
  return (
    <>
      <Header />
      <div className="Sign_in_form">
        <Container>
          <p className="mb-1 custom_text_design">- Category</p>
          <h3 className="mb-5">Create Category</h3>
          <Row>
            <Col className="col-md-8 offset-md-2  mb-5 form_inner">
              <div className="pb-5 ">
                <Row>
                  <Col className="col-md-8 offset-md-2">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Type Category"
                          name="category"
                          onChange={(e) => setCategory(e.target.value)}
                        />
                      </Form.Group>

                
                      <Button
                        type="submit"
                        className="btn btn-default mt-5"
                        style={{ width: "100%" }}
                        disabled={adding}
                      >
                        {
                          adding ? "Submitting" : "Create"
                        }
                        
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

export default CreateCategory;

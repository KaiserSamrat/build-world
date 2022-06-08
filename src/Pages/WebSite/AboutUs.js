import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AllAbout from "../../assets/images/aboutUs/allAbout.png";
import Started from "../../assets/images/aboutUs/started.svg";
import Footer from "../../Components/WebSite/Footer";
import Header from "../../Components/WebSite/Header";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="about_wrapper">
        <Container>
          <Row>
            <Col md="12" className="mb-4">
              <p className="mb-1 custom_text_design">- Learn More</p>
              <h3 className="mb-5">All About Us</h3>
              <div className="pb-5">
                <img alt="image" src={AllAbout} style={{ width: "100%" }} />
              </div>
            </Col>
            <Col className="col-md-10 offset-md-1">
              <Row>
                <p className="mb-1 custom_text_design">- How it has Started</p>
                <h3 className="mb-5">How and When it has All Started</h3>
                <Col md="6">
                  <div>
                    <img
                      alt="image"
                      src={Started}
                      className="mb-4"
                      style={{ width: "100%" }}
                    />
                  </div>
                </Col>
                <Col md="6">
                  <ul className="">
                    <li style={{ color: "#FF9A00" }}>
                      <h6 style={{ color: "#FF9A00" }}>
                        Natural Ingredients Only
                      </h6>
                    </li>
                    <p className="mt-4 mb-5">
                      10 years ago, when one of the co-founders came up with the
                      idea of making skincare and beauty products using only
                      natural ingredients, he did not even think twice.
                    </p>
                    <li style={{ color: "#FF9A00" }}>
                      <h6>Affordable Pricing Strategy</h6>
                    </li>
                    <p className="mt-4">
                      One of our main goals from the start was to offer high
                      quality products that would also have affordable prices.
                      We just can’t believe that we have finally achieved this
                      and now we are proud of it.
                    </p>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col md="12" className="mt-5 value_bottom_margin">
              <div className="text-center">
                <p className="mb-1 custom_text_design">- Company Values</p>
                <h3 className="mb-4">Our Core Values</h3>
              </div>
              <Row className="text-center">
                <Col md="4">
                  <i className="fas fa-arrow-trend-up"></i>
                  <h6 className="mt-3">Great Innovation</h6>
                  <p className="mt-3" style={{ padding: "0px 43px" }}>
                    We are always focusing on making all our products as
                    innovative as possible.
                  </p>
                </Col>
                <Col md="4">
                  <i className="bx bx-star me-2 mt-1"></i>
                  <h6 className="mt-3">High Quality</h6>
                  <p className="mt-3" style={{ padding: "0px 43px" }}>
                    One of our main values is the quality of the products that
                    we sell to the customers.
                  </p>
                </Col>
                <Col md="4">
                  <i className="bx bx-user me-2 mt-1"></i>

                  <h6 className="mt-3">Teamwork Matters</h6>
                  <p className="mt-3" style={{ padding: "0px 43px" }}>
                    We believe that being a successful company is all about
                    being a team.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;

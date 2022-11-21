import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductA from "../../assets/images/construction-silhou.jpg";
import ProductC from "../../assets/images/5138438.jpg";
import ProductB from "../../assets/images/construction-workers-sunset.jpg";
import ProductD from "../../assets/images/dark-brown-brick-wall-creative-back-phonon-closeup.jpg";

const Combo = () => {
  return (
    <React.Fragment>
      <div className="combo_wrapper">
        <Row>
          <Col md={6}>
            <div className="left-wraper mb-5">
              <img alt="image" src={ProductA} style={{ width: "100%" }} />
              <div className="inner-wraper">
                <h2>
                  Best Building Materials
                  <br /> Combo Product
                </h2>
                <p className="mt-2">
                  Trendy Products, Factory Prices, Excellent Service
                </p>
                <div className="mt-5">
                  <button className="btn-default button-orange">
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="right-wraper">
              <img alt="image" src={ProductB} style={{ width: "100%" }} />
              <h2>
                Best products & <br />
                brands in our store
              </h2>
            </div>
            <Row className="mt-4">
              <Col md={6} className="mb-5">
                <img alt="image" src={ProductC} style={{ width: "100%" }} />
              </Col>
              <Col md={6}>
                <img alt="image" src={ProductD} style={{ width: "100%" }} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};
export default Combo;

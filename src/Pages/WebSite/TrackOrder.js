import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import BlockToy from "../../assets/images/blockToy.svg";
import backImg from "../../assets/images/trackOrder/backImg.svg";
import orderConfirmed from "../../assets/images/trackOrder/orderConfirmed.svg";
import product from "../../assets/images/trackOrder/product.svg";
import Received from "../../assets/images/trackOrder/received.svg";
import truck from "../../assets/images/trackOrder/truck.svg";
import truckTick from "../../assets/images/trackOrder/truckTick.svg";
import truckTomato from "../../assets/images/trackOrder/truckTomato.svg";
import truckWhite from "../../assets/images/trackOrder/truckWhite.svg";
import Combo from "../../Components/WebSite/Combo";
import Footer from "../../Components/WebSite/Footer";
import Header from "../../Components/WebSite/Header";

const TrackOrder = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    // slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 5,
          // slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
          // slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <Header />
      <div className="trackOrder_wrapper">
        <Container>
          <Row>
            <Col className="col-md-8 offset-md-2 mt-5">
              <h3 className="mb-4 text-center">Track your Order</h3>
              <div className="d-flex align-items-center justify-content-between mobile-d-unset">
                <form>
                  <div className="search-box-header-top-wrap search_radius_shop">
                    <img
                      alt="image"
                      src={truck}
                      className="me-3 mobile-size"
                      style={{ width: "3%" }}
                    />
                    <input
                      type="search"
                      name=""
                      id=""
                      placeholder="Tracking Number"
                      style={{ width: "612px" }}
                    />
                  </div>
                </form>
                <div className="mobile-position">
                  <button className="btn btn-default button-orange-padding ">
                    <img
                      alt="image"
                      src={truckWhite}
                      className="me-3"
                      style={{ width: "24%" }}
                    />
                    Track
                  </button>
                </div>
              </div>
            </Col>
            <Col className="col-md-10 offset-md-1 mt-5 order_info">
              <Card>
                <Card.Body>
                  <div className="product_wrapper">
                    <Row className="">
                      <Col md="8">
                        <div className="d-flex justify-content-start">
                          <img src={product} alt="image" />
                          <div className="ms-4">
                            <h5 className="mt-4">
                              STROLLER Canvas with Dior Oblique Print
                            </h5>
                            <h6 className="mt-4">Sold By: Kaiser Samrat</h6>
                            <h3 className="mt-4">Cart Total: ৳2580</h3>
                          </div>
                        </div>
                      </Col>
                      <Col md="4" className="text-end">
                        <h5 className="mt-3">Samsad Rashid</h5>
                        <p className="mt-3">
                          House 15, Road 24, banani,
                          <br />
                          Dhaka - 1212, Bangladesh
                        </p>
                        <p className="mt-3">
                          Phone:{" "}
                          <span className="phone" style={{ fontWeight: "700" }}>
                            +880 1683465784
                          </span>
                        </p>
                      </Col>
                    </Row>
                    {/* <div className="border mt-5 mb-5"></div> */}
                    <hr className="mt-5 mb-5" />
                    <div className="d-flex justify-content-between shipping_area">
                      <div className="text-center inner_side">
                        <img
                          src={orderConfirmed}
                          alt="image"
                          className="inner_side_order"
                        />
                        <p className="mt-2">Order Confirmed</p>
                        <span>21/05/2022</span>
                      </div>
                      <div className="text-center inner_side">
                        <img
                          src={truckTick}
                          alt="image"
                          className="inner_side_order"
                        />
                        <p className="mt-2">Shipped</p>
                        <span>21/05/2022</span>
                      </div>
                      <div className="text-center">
                        <img
                          src={truckTomato}
                          alt="image"
                          className="inner_side_delivery"
                        />
                        <p className="mt-2">Out for Delivery</p>
                        <span>21/05/2022</span>
                      </div>
                      <div className="text-center">
                        <img
                          src={Received}
                          alt="image"
                          className="inner_side_received"
                        />
                        <p className="mt-2">Received</p>
                        <span>21/05/2022</span>
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <img src={backImg} alt="image" style={{ width: "100%" }} />
              </Card>
            </Col>
            <Col>
              <div className="featured_product_wraper">
                <p className="mb-1 custom_text_design">- Explore More</p>
                <h3 className="mb-5">Featured Products</h3>

                <Row>
                  <Slider {...settings}>
                    {([1, 2, 3, 4, 5, 6, 7, 8] || []).map((data, key) => {
                      return (
                        <>
                          <Col className="p-2">
                            <Card className="card_wrapper mb-4">
                              <div className="card_img">
                                <Card.Img
                                  variant="top"
                                  alt="Image"
                                  src={BlockToy}
                                />
                              </div>

                              <Card.Body>
                                <div className="card_body_wrapper">
                                  <h5 className="mb-3">
                                    Bubble Machine toy best quality
                                  </h5>
                                  <h3>৳ 750.00</h3>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        </>
                      );
                    })}
                  </Slider>
                </Row>
              </div>
              <Combo />
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default TrackOrder;

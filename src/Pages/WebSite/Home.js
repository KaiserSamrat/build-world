import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import BabyShop from "../../assets/images/babyShop.svg";
import BlockToy from "../../assets/images/blockToy.svg";
import Crawler from "../../assets/images/homeCat/crawler.svg";
import DayCare from "../../assets/images/homeCat/dayCare.svg";
import NewBorn from "../../assets/images/homeCat/newBorn.svg";
import PlayShop from "../../assets/images/homeCat/playShop.svg";
import PreSchool from "../../assets/images/homeCat/preSchool.svg";
import Todler from "../../assets/images/homeCat/todler.svg";
import Vitamins from "../../assets/images/homeCat/vitamins.svg";
import PopularProduct from "../../assets/images/popular_product.svg";
import Combo from "../../Components/WebSite/Combo";
import Footer from "../../Components/WebSite/Footer";
import Header from "../../Components/WebSite/Header";

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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

      <div className="baby_shop_wraper">
        <Container>
          <Row>
            <Col md={6} className="align-self-center">
              <h1 className="mb-4">Best Baby Shop in Town.</h1>
              <p className="mb-4 text-muted">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim{" "}
              </p>
              <form>
                <div className="search-box-header-top-wrap search_radius_shop mb-4">
                  <i
                    className="fas fa-search mt-1"
                    style={{ color: "#888888" }}
                  ></i>
                  <input type="search" name="" id="" placeholder="Search..." />
                </div>
              </form>
            </Col>
            <Col md={6} className="text-end">
              <img alt="ShopImage" src={BabyShop} style={{ width: "100%" }} />
            </Col>
          </Row>
        </Container>
        <div className="category_wraper">
          <Container>
            <Row>
              <p className="mb-1 custom_text_design">- The Categories</p>
              <h3 className="mb-5">Browse by Category</h3>
              <Slider {...settings}>
                <div>
                  <div className="img_area" style={{ background: "#D9ECFA" }}>
                    <img alt="Image" src={NewBorn} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">New Born</h6>
                </div>

                <div>
                  <div className="img_area" style={{ background: "#FBD2D6" }}>
                    <img alt="Image" src={Todler} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Todler</h6>
                </div>
                <div>
                  <div className="img_area" style={{ background: "#D5F5E6" }}>
                    <img alt="Image" src={Crawler} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Crawler</h6>
                </div>
                <div>
                  <div className="img_area" style={{ background: "#FBE3D2" }}>
                    <img alt="Image" src={PlayShop} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Play Shop</h6>
                </div>
                <div>
                  <div className="img_area" style={{ background: "#E8E4F2" }}>
                    <img alt="Image" src={DayCare} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Day Care</h6>
                </div>
                <div>
                  <div className="img_area" style={{ background: "#F8E6DA" }}>
                    <img alt="Image" src={PreSchool} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Pre School</h6>
                </div>
                <div>
                  <div className="img_area" style={{ background: "#F8E6DA" }}>
                    <img alt="Image" src={Vitamins} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Vitamins</h6>
                </div>
              </Slider>
              <div className=" text-center">
                <button className="btn btn-default button-orange mt-3">
                  Show More
                </button>
              </div>
            </Row>
          </Container>
        </div>
        <div className="explore_product_wraper">
          <Container>
            <Row>
              <p className="mb-1 custom_text_design">- Our Products</p>
              <h3 className="mb-5">Explore our Products</h3>

              {([1, 2, 3, 4, 5, 6, 7, 8] || []).map((data, key) => {
                return (
                  <>
                    <Col md={3}>
                      <Card className="card_wrapper mb-4">
                        <div className="card_img">
                          <Card.Img variant="top" alt="Image" src={BlockToy} />
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
              <div className="mt-5 text-center">
                <button className="btn btn-default button-orange">
                  Show More
                </button>
              </div>
            </Row>
          </Container>
        </div>
      </div>

      <div className="best_product_wrapper">
        <Container>
          <Row>
            <Col md={6}>
              <img alt="Image" src={PopularProduct} style={{ width: "100%" }} />
            </Col>
            <Col md={6} className="align-self-center mb-2">
              <p className="custom_text_design"> - Explore</p>
              <h3 className="mb-3">Most Popular Products</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim. Lorem ipsum dolor sit amet, consectetuipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqut enim ad minim.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="popular_product_wrapper">
        <Container>
          <Row>
            <p className="mb-1 custom_text_design"> - Explore</p>
            <h3 className="mb-5">Most Popular Products</h3>
            {([1, 2, 3, 4] || []).map((data, key) => {
              return (
                <>
                  <Col md={3}>
                    <Card className="card_wrapper">
                      <div className="card_img">
                        <Card.Img variant="top" alt="Image" src={BlockToy} />
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
            <div className="mt-5 text-center">
              <button className="btn btn-default button-orange">
                Show More
              </button>
            </div>
          </Row>

          <Combo />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Home;

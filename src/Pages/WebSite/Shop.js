import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Art from "../../assets/images/homeCat/art.svg";
import Crawler from "../../assets/images/homeCat/crawler.svg";
import DayCare from "../../assets/images/homeCat/dayCare.svg";
import Diy from "../../assets/images/homeCat/diy.svg";
import gift from "../../assets/images/homeCat/gift.svg";
import LearningToy from "../../assets/images/homeCat/learningToy.svg";
import LegoLand from "../../assets/images/homeCat/legoLand.svg";
import NewBorn from "../../assets/images/homeCat/newBorn.svg";
import PaperCrafts from "../../assets/images/homeCat/paperCrafts.svg";
import PlayShop from "../../assets/images/homeCat/playShop.svg";
import PreSchool from "../../assets/images/homeCat/preSchool.svg";
import Puzzle from "../../assets/images/homeCat/puzzle.svg";
import Todler from "../../assets/images/homeCat/todler.svg";
import Vitamins from "../../assets/images/homeCat/vitamins.svg";
import Combo from "../../Components/WebSite/Combo";
import Footer from "../../Components/WebSite/Footer";
import Header from "../../Components/WebSite/Header";

function Shop() {
  return (
    <>
      <Header />
      <div className="shop_wrapper">
        <Container>
          <Row>
            <div className="browse_category_wraper">
              <Container>
                <Row>
                  <p className="mb-1 custom_text_design">- The Categories</p>
                  <h3 className="mb-5">Browse by Category</h3>

                  <Col md={2}>
                    <div className="img_area" style={{ background: "#D9ECFA" }}>
                      <img alt="Image" src={NewBorn} />
                    </div>
                    <h6 className="text-center mt-4 mb-4">New Born</h6>
                  </Col>

                  <Col md={2}>
                    <div className="img_area" style={{ background: "#FBD2D6" }}>
                      <img alt="Image" src={Todler} />
                    </div>
                    <h6 className="text-center mt-4 mb-4">Todler</h6>
                  </Col>
                  <Col md={2}>
                    <div className="img_area" style={{ background: "#D5F5E6" }}>
                      <img alt="Image" src={Crawler} />
                    </div>
                    <h6 className="text-center mt-4 mb-4">Crawler</h6>
                  </Col>
                  <Col md={2}>
                    <div className="img_area" style={{ background: "#FBE3D2" }}>
                      <img alt="Image" src={PlayShop} />
                    </div>
                    <h6 className="text-center mt-4 mb-4">Play Shop</h6>
                  </Col>
                  <Col md={2}>
                    <div className="img_area" style={{ background: "#E8E4F2" }}>
                      <img alt="Image" src={DayCare} />
                    </div>
                    <h6 className="text-center mt-4 mb-4">Day Care</h6>
                  </Col>
                  <Col md={2}>
                    <div className="img_area" style={{ background: "#F8E6DA" }}>
                      <img alt="Image" src={PreSchool} />
                    </div>
                    <h6 className="text-center mt-4 mb-4">Pre School</h6>
                  </Col>
                  <Col md={2}>
                    <div className="img_area" style={{ background: "#F8E6DA" }}>
                      <img alt="Image" src={Vitamins} />
                    </div>
                    <h6 className="text-center mt-4 mb-4">Vitamins</h6>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="explore_category_wraper">
              <Container>
                <Row>
                  <p className="mb-1 custom_text_design">- The Categories</p>
                  <h3 className="mb-5">Explore more Category</h3>

                  <Col md={2}>
                    <div className="img_area" style={{ background: "#D9ECFA" }}>
                      <img alt="Image" src={Art} />
                    </div>
                    <h6 className="text-center mt-4 mb-4">Arts</h6>
                  </Col>

                  <Col md={2}>
                    <div className="img_area" style={{ background: "#FBD2D6" }}>
                      <img alt="Image" src={PaperCrafts} />
                    </div>
                    <h6 className="text-center mt-4 mb-4">Crafts Set</h6>
                  </Col>
                  <Col md={2}>
                    <div className="img_area" style={{ background: "#D5F5E6" }}>
                      <img alt="Image" src={Diy} />
                    </div>
                    <h6 className="text-center mt-4 mb-4">DIY</h6>
                  </Col>
                  <Col md={2}>
                    <div className="img_area" style={{ background: "#FBE3D2" }}>
                      <img alt="Image" src={gift} />
                    </div>
                    <h6 className="text-center mt-4 mb-4">Gift Corner</h6>
                  </Col>
                  <Col md={2}>
                    <div className="img_area" style={{ background: "#E8E4F2" }}>
                      <img alt="Image" src={LearningToy} />
                    </div>
                    <h6 className="text-center mt-4 mb-4">Learning Toy</h6>
                  </Col>
                  <Col md={2}>
                    <div className="img_area" style={{ background: "#F8E6DA" }}>
                      <img alt="Image" src={LegoLand} />
                    </div>
                    <h6 className="text-center mt-4 mb-4">Lego Land</h6>
                  </Col>
                  <Col md={2}>
                    <div className="img_area" style={{ background: "#F8E6DA" }}>
                      <img alt="Image" src={Puzzle} />
                    </div>
                    <h6 className="text-center mt-4 mb-4">Puzzle</h6>
                  </Col>
                </Row>
              </Container>
            </div>
            <Combo />
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default Shop;

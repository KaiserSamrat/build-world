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
import brick from "../../assets/images/brick.png";
import construction from "../../assets/images/construction.png";
import floor from "../../assets/images/floor.png";
import electric from "../../assets/images/electric.png";
import light from "../../assets/images/light-bulb.png";
import steel from "../../assets/images/iron-bar.png";
import furniture from "../../assets/images/furnitures.png";
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
                    <div>
                      <div
                        className="img_area"
                        style={{ background: "#D9ECFA" }}
                      >
                        <img
                          alt="Image"
                          style={{ width: "100px", height: "100px" }}
                          src={steel}
                        />
                      </div>
                      <h6 className="text-center mt-4 mb-4">Steel</h6>
                    </div>
                  </Col>

                  <Col md={2}>
                  <div>
                  <div className="img_area" style={{ background: "#FBD2D6" }}>
                    <img alt="Image" style={{  width:"100px", height:"100px"}} src={construction} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Cement</h6>
                </div>
                  </Col>
                  <Col md={2}>
                  <div>
                  <div className="img_area" style={{ background: "#D5F5E6" }}>
                    <img alt="Image"  style={{  width:"100px", height:"100px"}} src={light} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Light</h6>
                </div>
                  </Col>
                  <Col md={2}>
                  <div>
                  <div className="img_area" style={{ background: "#FBE3D2" }}>
                    <img alt="Image"  style={{  width:"100px", height:"100px"}} src={electric} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Electrics</h6>
                </div>
                  </Col>
                  <Col md={2}>
                  <div>
                  <div className="img_area" style={{ background: "#E8E4F2" }}>
                    <img alt="Image" style={{  width:"100px", height:"100px"}} src={brick} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Tiles</h6>
                </div>
                  </Col>
                  <Col md={2}>
                  <div>
                  <div className="img_area" style={{ background: "#F8E6DA" }}>
                    <img alt="Image" style={{  width:"100px", height:"100px"}} src={floor} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Ceremics</h6>
                </div>
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
                  <div>
                  <div className="img_area" style={{ background: "#FBE3D2" }}>
                    <img alt="Image"  style={{  width:"100px", height:"100px"}} src={electric} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Electrics</h6>
                </div>
                  </Col>
                  <Col md={2}>
                  <div>
                  <div className="img_area" style={{ background: "#E8E4F2" }}>
                    <img alt="Image" style={{  width:"100px", height:"100px"}} src={brick} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Tiles</h6>
                </div>
                  </Col>
                  <Col md={2}>
                  <div>
                  <div className="img_area" style={{ background: "#F8E6DA" }}>
                    <img alt="Image" style={{  width:"100px", height:"100px"}} src={floor} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Ceremics</h6>
                </div>
                  </Col>
                  
                  <Col md={2}>
                    <div>
                      <div
                        className="img_area"
                        style={{ background: "#D9ECFA" }}
                      >
                        <img
                          alt="Image"
                          style={{ width: "100px", height: "100px" }}
                          src={steel}
                        />
                      </div>
                      <h6 className="text-center mt-4 mb-4">Steel</h6>
                    </div>
                  </Col>

                  <Col md={2}>
                  <div>
                  <div className="img_area" style={{ background: "#FBD2D6" }}>
                    <img alt="Image" style={{  width:"100px", height:"100px"}} src={construction} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Cement</h6>
                </div>
                  </Col>
                  <Col md={2}>
                  <div>
                  <div className="img_area" style={{ background: "#D5F5E6" }}>
                    <img alt="Image"  style={{  width:"100px", height:"100px"}} src={light} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Light</h6>
                </div>
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

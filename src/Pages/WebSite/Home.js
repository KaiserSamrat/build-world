import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import BabyShop from "../../assets/images/babyShop.svg";
import brick from "../../assets/images/brick.png";
import construction from "../../assets/images/construction.png";
import floor from "../../assets/images/floor.png";
import electric from "../../assets/images/electric.png";
import light from "../../assets/images/light-bulb.png";
import steel from "../../assets/images/iron-bar.png";
import furniture from "../../assets/images/furnitures.png";
import banner1 from "../../assets/images/banner.jpg";
import BlockToy from "../../assets/images/blockToy.svg";
import demo from "../../assets/images/set-tools-with-copy-space.jpg";
import demo2 from "../../assets/images/construction-silhouette.jpg";
import Crawler from "../../assets/images/homeCat/crawler.svg";
import DayCare from "../../assets/images/homeCat/dayCare.svg";
import NewBorn from "../../assets/images/homeCat/newBorn.svg";
import PlayShop from "../../assets/images/homeCat/playShop.svg";
import PreSchool from "../../assets/images/homeCat/preSchool.svg";
import Todler from "../../assets/images/homeCat/todler.svg";
import Vitamins from "../../assets/images/homeCat/vitamins.svg";
import PopularProduct from "../../assets/images/popular_product.svg";
import cement from "../../assets/images/M008C060_Cement_Bag_01.jpg";
import steelImage from "../../assets/images/1602.m00.i104.n059.P.c25.203383798 Seamless vector steel rebars, reinforcements set.jpg";
import bulb from "../../assets/images/you-will-never-leave-me-dark-anymore.jpg";
import headphone from "../../assets/images/close-up-shot-black-condenser-microphone-front-computer-sound-engineering-studio.jpg";
import Combo from "../../Components/WebSite/Combo";
import Footer from "../../Components/WebSite/Footer";
import Header from "../../Components/WebSite/Header";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../../Store/Product/actions";
const productList = [
  {
      name:"BSRM", 
      categories:"Steel",
      price: "1000",
      img: cement
  },
  {
    name:"RSRM", 
    categories:"Cement",
    price: steelImage
},
{
  name:"BOLAKA", 
  categories:"Light",
  price: "120",
  img: bulb
},
{
  name:"NASA", 
  categories:"Electronics",
  price: headphone
},
{
  name:"DIAMOND", 
  categories:"Tiles",
  price: "1400"
},
{
  name:"Shine", 
  categories:"Ceramics",
  price: "120"
},
{
  name:"Kashmir", 
  categories:"Fan",
  price: "1290"
},
{
  name:"Energy", 
  categories:"Led lights",
  price: "150"
},
{
  name:"Energy", 
  categories:"Swtichboard",
  price: "120"
},
{
  name:"Walton", 
  categories:"Holder",
  price: "120"
},
  
  
]

const Home = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { authToken, productList, productListLoading } = useSelector((state) => ({
      authToken: state.loginReducer.token,
      productList: state.ProductReducer.productList,
      productListLoading: state.ProductReducer.productListLoading,
      // adding: state.coupon.adding,
    }));
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
  useEffect(()=>{
    dispatch(getProduct(authToken))
},[])
  return (
    <>
      <Header />

      <div className="baby_shop_wraper">
        <Container>
          <Row>
            <Col md={6} className="align-self-center">
              <h1 className="mb-4">Best Materials in Town.</h1>
              <p className="mb-4 text-muted">
                
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
              <img alt="ShopImage" src={banner1} style={{ width: "100%" }} />
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
                  <div className="img_area" style={{ background: "#D9ECFA"}}>
                    <img alt="Image"  style={{  width:"100px", height:"100px"}} src={steel} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Steel</h6>
                </div>

                <div>
                  <div className="img_area" style={{ background: "#FBD2D6" }}>
                    <img alt="Image" style={{  width:"100px", height:"100px"}} src={construction} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Cement</h6>
                </div>
                <div>
                  <div className="img_area" style={{ background: "#D5F5E6" }}>
                    <img alt="Image"  style={{  width:"100px", height:"100px"}} src={light} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Light</h6>
                </div>
                <div>
                  <div className="img_area" style={{ background: "#FBE3D2" }}>
                    <img alt="Image"  style={{  width:"100px", height:"100px"}} src={electric} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Electrics</h6>
                </div>
                <div>
                  <div className="img_area" style={{ background: "#E8E4F2" }}>
                    <img alt="Image" style={{  width:"100px", height:"100px"}} src={brick} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Tiles</h6>
                </div>
                <div>
                  <div className="img_area" style={{ background: "#F8E6DA" }}>
                    <img alt="Image" style={{  width:"100px", height:"100px"}} src={floor} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Ceremics</h6>
                </div>
                <div>
                  <div className="img_area" style={{ background: "#F8E6DA" }}>
                    <img alt="Image"  style={{  width:"100px", height:"100px"}} src={furniture} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">Furniture</h6>
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

              {(productList?.data || []).map((data, key) => {
                return (
                  <>
                    <Col md={3}>
                      <Card className="card_wrapper mb-4">
                        <div className="card_img">
                          <Card.Img variant="top" alt="Image" src={data?.image}  style={{height:"300px"}}/>
                        </div>

                        <Card.Body>
                          <div className="card_body_wrapper">
                            <h5 className="mb-3">
                             {data?.productName}
                            </h5>
                            <h6 className="mb-3">
                             {data?.category?.categoryName}
                            </h6>
                            <h3>৳ {data?.price}</h3>
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
              <img alt="Image" src={demo2} style={{ width: "100%" }} />
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
            {(productList?.data  || []).map((data, key) => {
              return (
                <>
                  <Col md={3}>
                    <Card className="card_wrapper">
                      <div className="card_img">
                        <Card.Img variant="top" alt="Image" src={data?.image} style={{height:"300px"}}/>
                      </div>

                      <Card.Body>
                        <div className="card_body_wrapper">
                          <h5 className="mb-3">
                          {data?.productName}
                          </h5>
                          <h3>৳ {data?.price}</h3>
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

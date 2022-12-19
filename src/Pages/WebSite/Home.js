import React, { useState } from "react";
import { Card, Col, Container, Row, ModalHeader } from "react-bootstrap";
import Slider from "react-slick";
import {  Modal } from "reactstrap";
import BabyShop from "../../assets/images/babyShop.svg";
import brick from "../../assets/images/vegetables.png";
import construction from "../../assets/images/stationary.png";
import floor from "../../assets/images/fast-food.png";
import electric from "../../assets/images/electric.png";
import light from "../../assets/images/medicine.png";
import steel from "../../assets/images/grocery.png";
import furniture from "../../assets/images/furnitures.png";

import shopping from "../../assets/images/shopping.png";
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
import { getProduct, getShopList } from "../../Store/Product/actions";
import './home.css'
import { addCart } from "../../Store/cart/actions";
import './student-package.scss'


const Home = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [modal2, setModal2] = useState(false);
  const [modalCardTitle, setModalCardTitle] = useState("");
  const [modalCardImage, setModalCardImage] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const { authToken, productList, productListLoading, shopList } = useSelector((state) => ({
      authToken: state.loginReducer.token,
      productList: state.ProductReducer.productList,
      shopList: state.ProductReducer.shopList,
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
useEffect(() => {
  dispatch(getShopList(authToken));
}, []);
const handleStore = (data) => {
  setModalCardTitle(data?.productName);
  setModalCardImage(data?.image);
  setTotalPrice(data?.price)
  console.log('data', data);

  dispatch(addCart(data));
};
  return (
    <>
      <Header />

      <div className="baby_shop_wraper">
        <Container>
          <Row>
            <Col md={12} className="align-self-center">
   
                <img src={shopping} class="w-100" alt="" style={{height:"450px"}}/>

       
 
            </Col>
          
          </Row>
        </Container>
        <section class="container mt-5">
        <h1>নতুন পণ্য:</h1>

        <div class="row row-cols-1 row-cols-md-4 g-4 mt-4">
          
        {(productList?.data || []).map((data, key) => {
                return (
                  <>
            <div class="col single-shoe">
                <div class="card h-80 border-0 bg-white shadow">
                    <div class="shoe-image bg-light rounded m-3">
                        <img src={data?.image} class="card-img-top " alt="..."/>

                    </div>
                    <div class="card-body">
                        <h5 class="card-title"> {data?.productName}</h5>
                        <p class="card-text"> {data?.category?.categoryName}</p>
                        <div class="price-info d-flex align-items-center">
                            <h2>{data?.price} Tk.</h2>
                            <button class="btn btn-primary ms-auto"  onClick={() => {
                                      handleStore(data);
                                      setModal2(true);
                                     
                                    }}>কিনুন</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
                );
              })}

        </div>
    </section>
        <div className="category_wraper">
          <Container>
            <Row>
              <p className="mb-1 custom_text_design">- ক্যাটাগরি</p>
              <h3 className="mb-5">ক্যাটাগরি অনুযায়ী বাছুন</h3>
              <Slider {...settings}>
                <div>
                  <div className="img_area" style={{ background: "#D9ECFA"}}>
                    <img alt="Image"  style={{  width:"100px", height:"100px"}} src={steel} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">মুদি</h6>
                </div>

                <div>
                  <div className="img_area" style={{ background: "#FBD2D6" }}>
                    <img alt="Image" style={{  width:"100px", height:"100px"}} src={construction} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">স্টেশনারি</h6>
                </div>
                <div>
                  <div className="img_area" style={{ background: "#D5F5E6" }}>
                    <img alt="Image"  style={{  width:"100px", height:"100px"}} src={light} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">ওষুধ</h6>
                </div>
                <div>
                  <div className="img_area" style={{ background: "#FBE3D2" }}>
                    <img alt="Image"  style={{  width:"100px", height:"100px"}} src={electric} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">ইলেক্ট্রনিক্স</h6>
                </div>
                <div>
                  <div className="img_area" style={{ background: "#E8E4F2" }}>
                    <img alt="Image" style={{  width:"100px", height:"100px"}} src={brick} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">কাঁচা বাজার</h6>
                </div>
                <div>
                  <div className="img_area" style={{ background: "#F8E6DA" }}>
                    <img alt="Image" style={{  width:"100px", height:"100px"}} src={floor} />
                  </div>
                  <h6 className="text-center mt-4 mb-4">হোম মেইড</h6>
                </div>
              
              </Slider>
           
            </Row>
          </Container>
        </div>
       
      </div>

    
      <section class="container mt-5">
        <h1>দোকান তালিকা:</h1>

        <div class="row row-cols-1 row-cols-md-4 g-4 mt-4">
          
        {(shopList?.data?.shop || []).map((data, key) => {
                return (
                  <>
            <div class="col single-shoe">
                <div class="card h-80 border-0 bg-white shadow">
                    <div class="shoe-image bg-light rounded m-3">
                        <img src={data?.image} class="card-img-top " alt="..."/>

                    </div>
                    <div class="card-body">
                        <h5 class="card-title"> {data?.name}</h5>
                        <p class="card-text"> {data?.aboutShop}</p>
                        <div class="price-info d-flex align-items-center">
                          
                            <button class="btn btn-primary ms-auto" onClick={()=>
                            history.push(`/shop/${data?._id}`)}>পণ্য দেখুন</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
                );
              })}

        </div>
    </section>
    <Modal
        size={"lg"}
        isOpen={modal2}
        centered
        toggle={() => setModal2(false)}
      >
        <ModalHeader className="added-card-header" toggle={modal2}>
          <span>
            <i className="bx bx-check"></i>
            Added to the cart
          </span>
          <button
            onClick={() => {
              setModal2(false);
            }}
          >
            <span></span>
            <span></span>
          </button>
        </ModalHeader>
        <div className="added-card-go-to-card-popup">
          <div className="card-content-info-left">
            <img src={(modalCardImage)} alt="" />
            <div className="card-content-info-left-info">
              <h5>{modalCardTitle}</h5>
              <p className="mt-3">
                 Price -
                {totalPrice} Tk{" "}
              </p>
              
            </div>
          </div>
          <div className="card-content-info-button">
            <button
              onClick={() => history.push(`/cart`)}
              className="btn btn-sm btn-primary"
            >
              Go to cart
            </button>
          </div>
        </div>
      </Modal>
      <Footer />
    </>
  );
};

export default Home;

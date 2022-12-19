import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  ModalHeader,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../../Components/WebSite/Header";
import { addCart } from "../../Store/cart/actions";
import { getShopProduct } from "../../Store/Product/actions";
import { Modal } from "reactstrap";
import Footer from "../../Components/WebSite/Footer";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const ShopProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {id} = useParams()
  const [modal2, setModal2] = useState(false);
  const [modalCardTitle, setModalCardTitle] = useState("");
  const [modalCardImage, setModalCardImage] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const { authToken, shopProduct, productListLoading, role, cart } =
    useSelector((state) => ({
      authToken: state.loginReducer.token,
      role: state.loginReducer.role,
      shopProduct: state.ProductReducer.shopProduct,
      productListLoading: state.ProductReducer.productListLoading,
      cart: state.CardReducer.cart,
      // adding: state.coupon.adding,
    }));
  console.log("cart", cart);
  console.log("role", role);
  console.log("categoryList", shopProduct, productListLoading);
  useEffect(() => {
    if(id){
        dispatch(getShopProduct(authToken, id));
    }
    
  }, []);
  const handleStore = (data) => {
    setModalCardTitle(data?.productName);
    setModalCardImage(data?.image);
    setTotalPrice(data?.price);
    console.log("data", data);

    dispatch(addCart(data));
  };
  return (
    <>
      <Header />
      <div>
        <div className="explore_product_wraper">
          <Container>
            <Row>
              <p className="mb-1 custom_text_design">-  পণ্য</p>
              <h3 className="mb-2">পণ্য অনুযায়ী বাছুন</h3>
              {role === "SELLER" ? (
                <div className="text-end">
                  <Button
                    className="btn btn-waring "
                    onClick={() => {
                      history.push("/create-product");
                    }}
                  >
                    Create Product
                  </Button>
                </div>
              ) : (
                <span></span>
              )}

              <section class="container ">
                <div class="row row-cols-1 row-cols-md-4 g-4 mb-5">
                  {(shopProduct?.data || []).map((data, key) => {
                    return (
                      <>
                        <div class="col single-shoe">
                          <div class="card h-80 border-0 bg-white shadow">
                            <div class="shoe-image bg-light rounded m-3">
                              <img
                                src={data?.image}
                                class="card-img-top "
                                alt="..."
                              />
                            </div>
                            <div class="card-body">
                              <h5 class="card-title"> {data?.productName}</h5>
                              <p class="card-text">
                                {" "}
                                {data?.category?.categoryName}
                              </p>
                              <div class="price-info d-flex align-items-center">
                                <h2>{data?.price} Tk.</h2>
                                <button
                                  class="btn btn-primary ms-auto"
                                  onClick={() => {
                                    handleStore(data);
                                    setModal2(true);
                                  }}
                                >
                                  কিনুন
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </section>
             
            </Row>
          </Container>
          <Footer/>
        </div>
      </div>
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
            <img src={modalCardImage} alt="" />
            <div className="card-content-info-left-info">
              <h5>{modalCardTitle}</h5>
              <p className="mt-3">Price -{totalPrice} Tk </p>
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
    </>
  );
};

export default ShopProduct;

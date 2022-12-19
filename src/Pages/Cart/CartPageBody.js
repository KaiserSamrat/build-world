// import { AvField, AvForm } from "availity-reactstrap-validation";
import React, { useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, withRouter } from "react-router-dom";
import { FormGroup, Label } from "reactstrap";
// import img1 from "../../assets/images/product.png";
import { imageBaseUrl } from "../../helpers/api_helper";
import { removeCart } from "../../Store/cart/actions";
import { addPackageOrder } from "../../Store/Order/actions";

import createpBanner from "./img/create-banner.png";
import emptyCart from "./img/emptyCart.svg";

const freeCupon = [
  "COUPON 100",
  "COUPON FRE",
  "BACK2SCHOOL",
  "LITTLELEARNER",
  "FESTIVE100",
  "DRINKMAS",
];
const CartPageBody = () => {
  const history = useHistory()
  const [agree, setAgree] = useState(false);
  const [cuponName, setCuponName] = useState("");
  const [free, setFree] = useState(false);
  const [couponInfo, setCouponInfo] = useState([]);
  const [discountCard, setDiscountCard] = useState([]);
  const [paymentSystem, setPaymentSystem] = useState("COD")
  const dispatch = useDispatch();
  const { cart, loginId , authToken} = useSelector((state) => ({
    cart: state.CardReducer.cart,
    loginId: state.loginReducer.id,
    authToken: state.loginReducer.token,
  }));
  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + Number(item?.price), 0);
  }, [cart, discountCard]);
  console.log("cart", cart);
  const handleRemove = (data) => {
    const filterCart = discountCard?.filter((el) => el?._id !== data?._id);
    setDiscountCard(filterCart);
    dispatch(removeCart(data));
  };
  function handleSubmit(event, errors, values) {
    console.log("hello");
    event.preventDefault();
    console.log("cart", cart);
    let newProduct = [];
    cart.map((data) => {
      newProduct.push(data?._id);
    });
    let body = {
      product: newProduct,
      orderPrice: totalPrice,
      shopId: cart[0]?.shop,
      buyerId: loginId,
      paymentMethod: paymentSystem,
      paid: true
    };

    console.log("newProduct", body);

    dispatch(addPackageOrder(body, history, authToken, "", paymentSystem));
  }
  const handlePayment = (e) =>{
    console.log("hello", e.target.value);
    setPaymentSystem(e.target.value)

  }
  return (
    <div className="cart-page-main-wrap-area">
      <Container>
        <div className="cart-page-inner-wrap">
          <h3>Cart</h3>
          <div className="full-cart-area">
            {cart?.length ? (
              <Row>
                <Col lg={6}>
                  <div className="cart-page-left-wrap">
                    {cart?.map((data, idx) => (
                      <div className="cart-item-wrap" key={idx}>
                        <div className="cart-single-item">
                          <div
                            className="cart-remove-icon cursor-pointer"
                            onClick={() => handleRemove(data)}
                          >
                            <i className="bx bx-x fs-3"></i>
                          </div>
                          <div
                            className="single-product-image"
                            // style={{
                            //   maxWidth: "30%",
                            // }}
                          >
                            <img
                              // src={`${getPhotoUrl(data?.photo)}`}
                              src={data?.image}
                              alt=""
                              className="img-fluid rounded-2"
                              style={{height:"150px"}}
                            />
                          </div>
                          <div className="single-product-content">
                            <h4>{data?.productName}</h4>
                            <div className="package-all-content-details-sub-title-time cart-page-time">
                              <p>
                                <span>
                                  <i className="bx bx-price"></i>
                                </span>
                                Price: {data?.price} Tk
                              </p>
                            </div>
                            <h6></h6>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="cart-page-total-amount m-0">
                    <div className="basic-price-top">
                      <div className="single-price">
                        <div className="p-neme">
                          <p>Price</p>
                        </div>
                        <div className="p-price">
                          <p>Tk. {totalPrice} </p>
                        </div>
                      </div>
                      <div className="single-price">
                        <div className="p-neme">
                          <p>Discount</p>
                        </div>
                        <div className="p-price">
                          <p>- Tk. 0</p>
                        </div>
                      </div>
                      <div className="single-price">
                        <div className="p-neme">
                          <p>VAT</p>
                        </div>
                        <div className="p-price">
                          <p>Tk. 0</p>
                        </div>
                      </div>
                    </div>
                    <div className="basic-price-top middle-cart">
                      <div className="single-price">
                        <div className="p-neme">
                          <p>Price</p>
                        </div>
                        <div className="p-price">
                          <p>Tk. </p>
                        </div>
                      </div>
                    </div>
                    <div className="basic-price-top middle-cart">
                      <div className="single-price">
                        <div className="p-neme">
                          <p>Payment method</p>
                        </div>
                        <select onChange={handlePayment}>
                          <option>Select option</option>
                          <option value="COD">Cash On delivery</option>
                          <option value="SSL">Online Payment</option>
                        </select>
                      </div>
                    </div>

                    <div className="basic-price-top last-bottom-cart mt-3 text-end ">
                      <div className="p-price">
                        <button
                          type="submit"
                          // disabled={!agree || ordering}
                          className={`btn ${
                            agree ? "btn-primary" : "payment-final-submit"
                          }`}
                          onClick={handleSubmit}
                        >
                          Continue Purchase
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            ) : (
              <div className="empty-cart-main-area-wrap-empty">
                <div className="empty-cart-inner-wrap">
                  <img src={emptyCart} alt="" />
                  <h6>Your cart is empty.</h6>
                  <p style={{ color: "#74788D" }}>
                    Please browse from the available resources , and shop for
                    your brains
                  </p>
                  <Link to="/" className="btn btn-primary mt-3">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPageBody;

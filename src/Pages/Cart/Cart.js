import React, { useEffect } from "react";
import { MetaTags } from "react-meta-tags";
import Footer from "../../Components/WebSite/Footer";
import Header from "../../Components/WebSite/Header";
import "./Cart.scss";
import CartPageBody from "./CartPageBody";
// import CartPageBody from "./CartPageBody";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Header/>
      <MetaTags>
        <title>Cart </title>
      </MetaTags>
      <CartPageBody />
      <Footer/>
    </React.Fragment>
  );
};

export default Cart;

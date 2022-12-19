import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import images from "../../assets/images/images.png";
import logo from "../../assets/images/logo.svg";
import { logoutUser } from "../../Store/login/actions";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch()
  const history = useHistory()
  const [testProfile, setTestProfile] = useState(true);
  const { token, cart} = useSelector((state) => ({
   
    token: state.loginReducer.token,
    cart: state.CardReducer.cart,
    // adding: state.coupon.adding,
  }));
  console.log('cart', cart);
  const handleLogout= ()=>{
    dispatch(logoutUser(history))
  }
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="top-header"
        fixed="top"
      >
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {" "}
              <div className="d-flex">
                <i
                  className="bx bx-phone me-2 mt-1"
                  style={{ color: "#FF9A00", fontSize: "16px" }}
                ></i>
                <span className="me-5"> +৮৮০১৭৪৭৫৩১৮৮৮</span>
              </div>
              <div className="d-flex">
                <i
                  className="bx bx-envelope me-2 mt-1"
                  style={{ color: "#FF9A00", fontSize: "16px" }}
                ></i>
                <span>  support@shondhan.com </span>
              </div>
            </Nav>
            <Nav>
              
              <Link className="nav-link" aria-current="page" to="/">
              হোম
              </Link>
              <Link className="nav-link" aria-current="page" to="/shop">
              স্টোর
              </Link>
              <Link className="nav-link" aria-current="page" to="/product">
              পণ্য
              </Link>
              {/* <Link className="nav-link" aria-current="page" to="/requisition">
                Requisition Form
              </Link> */}

              <Link className="nav-link" aria-current="page" to="/services">
              সেবা
              </Link>
            

             
              <Link className="nav-link" aria-current="page" to="/category">
              ক্যাটাগরি
              </Link>
              {/* <Link className="nav-link" aria-current="page" to="/track-order">
                Track Your Order
              </Link> */}
              <Link className="nav-link" aria-current="page" to="/userOrderHistory">
              অর্ডার হিস্ট্রি
              </Link>
             
              <Link to="/cart" className="nav-link cart-navbar-button">
                 
              কার্ড
                  <span>{cart?.length || 0}</span>
                </Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="header-bottom custom-center">
        <Container>
          <div className="d-flex justify-content-between align-items-center custom-d-flex">
            {/* <img alt="logo" src={logo} style={{ width: "7%" }} /> */}
            <h5>সন্ধান </h5>
            <form>
              <div className="search-box-header-top-wrap search_radius_bottom_header">
                <i
                  className="fas fa-search mt-1"
                  style={{ color: "#888888" }}
                ></i>
                <input type="search" name="" id="" placeholder="Search..." />
              </div>
            </form>

            <div className="d-flex justify-content-center ">
              <div>
                <i
                  className="bx bx-heart me-5 mt-1"
                  style={{ color: "#01040D", fontSize: "25px" }}
                ></i>
              </div>
              <div>
                <i
                  className="bx bx-envelope me-5 mt-1"
                  style={{ color: "#01040D", fontSize: "25px" }}
                ></i>
              </div>
              <div>
                <i
                  className="bx bx-chat  mt-1"
                  style={{ color: "#01040D", fontSize: "25px" }}
                ></i>
              </div>
            </div>
            {token ==="" ? (
              <div>
                <Link to={"/signin"}>
                  {" "}
                  <button className="btn btn-outline-default btn-outline-orange">
                    Sign In{" "}
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                
                  {" "}
                  <button className="btn btn-outline-default btn-outline-orange" onClick={()=>handleLogout()}>
                    Sign out{" "}
                  </button>
               
              </div>
            )}
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Header;

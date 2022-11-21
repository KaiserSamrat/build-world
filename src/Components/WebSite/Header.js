import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import images from "../../assets/images/images.png";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [testProfile, setTestProfile] = useState(true);
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
                <span className="me-5"> +880 1938392996</span>
              </div>
              <div className="d-flex">
                <i
                  className="bx bx-envelope me-2 mt-1"
                  style={{ color: "#FF9A00", fontSize: "16px" }}
                ></i>
                <span> tarek@gmail.com </span>
              </div>
            </Nav>
            <Nav>
              
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" aria-current="page" to="/shop">
                Shop
              </Link>
              <Link className="nav-link" aria-current="page" to="/requisition">
                Requisition Form
              </Link>

              <Link className="nav-link" aria-current="page" to="/services">
                Service
              </Link>
            

              <Link className="nav-link" aria-current="page" to="/vendor">
                Vendor
              </Link>
              <Link className="nav-link" aria-current="page" to="/track-order">
                Track Your Order
              </Link>
              <Nav.Link href="#action2">Blog</Nav.Link>
              <Link className="nav-link" aria-current="page" to="/contact-us">
                Contact
              </Link>
              <Link className="nav-link" aria-current="page" to="/about-us">
                About us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="header-bottom custom-center">
        <Container>
          <div className="d-flex justify-content-between align-items-center custom-d-flex">
            {/* <img alt="logo" src={logo} style={{ width: "7%" }} /> */}
            <h5>BuildX</h5>
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
            {testProfile ? (
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
                <Dropdown
                  isOpen={menu}
                  toggle={() => setMenu(!menu)}
                  className="d-inline-block"
                >
                  <DropdownToggle className="btn" tag="button">
                    <img
                      className="header-profile-user me-3"
                      src={images}
                      alt="Header Avatar"
                      style={{ width: "40px", borderRadius: "10px" }}
                    />
                    Kaiser
                    <i class="bx bx-chevron-down"></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Profile</DropdownItem>
                    {/* <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem> */}
                  </DropdownMenu>
                </Dropdown>
              </div>
            )}
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Header;

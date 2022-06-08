import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Facebook from "../../assets/images/facebook.svg";
import Instagram from "../../assets/images/instagram.svg";
import logo from "../../assets/images/logo.svg";
import Twitter from "../../assets/images/twitter.svg";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <Container>
          <div className="d-flex justify-content-between custom-d-flex">
            <div className="logo_wrapper">
              <img alt="logo" src={logo} />
              <p>@ 2022 - All rights reserved</p>
              <div className="d-flex">
                <Link to="#action2">
                  <div className="icon_backg">
                    <img alt="logo" src={Instagram} />
                  </div>
                </Link>
                <Link to="#action2">
                  <div className="icon_backg">
                    <img alt="logo" src={Twitter} />
                  </div>
                </Link>
                <Link to="#action2">
                  <div className="icon_backg">
                    <img alt="logo" src={Facebook} />
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <h6>Categories</h6>
              <ul class="list-unstyled">
                <li>
                  {" "}
                  <Nav.Link href="#action2">On Sale</Nav.Link>
                </li>
                <li>
                  {" "}
                  <Nav.Link href="#action2">Featured</Nav.Link>
                </li>
                <li>
                  {" "}
                  <Nav.Link href="#action2">Steal</Nav.Link>
                </li>
                <li>
                  {" "}
                  <Nav.Link href="#action2">Wood</Nav.Link>
                </li>
                <li>
                  {" "}
                  <Nav.Link href="#action2">Paint</Nav.Link>
                </li>
                <li>
                  {" "}
                  <Nav.Link href="#action2">Light</Nav.Link>
                </li>
              </ul>
            </div>
            <div>
              <h6>Legal</h6>
              <ul class="list-unstyled">
                <li>
                  {" "}
                  <Nav.Link href="#action2">Terms of Service</Nav.Link>
                </li>
                <li>
                  {" "}
                  <Nav.Link href="#action2">Privacy Policy</Nav.Link>
                </li>
                <li>
                  {" "}
                  <Nav.Link href="#action2">Return Policy</Nav.Link>
                </li>
                <li>
                  {" "}
                  <Nav.Link href="#action2">Shipping</Nav.Link>
                </li>
                <li>
                  {" "}
                  <Nav.Link href="#action2">Data Protection</Nav.Link>
                </li>
              </ul>
            </div>
            <div>
              <h6>Company</h6>
              <ul class="list-unstyled">
                <li>
                  {" "}
                  <Nav.Link href="#action2">About</Nav.Link>
                </li>
                <li>
                  {" "}
                  <Nav.Link href="#action2">Team</Nav.Link>
                </li>
                <li>
                  {" "}
                  <Nav.Link href="#action2">Contact</Nav.Link>
                </li>
                <li>
                  {" "}
                  <Nav.Link href="#action2">Careers</Nav.Link>
                </li>
                <li>
                  {" "}
                  <Nav.Link href="#action2">Vision</Nav.Link>
                </li>
                <li>
                  {" "}
                  <Nav.Link href="#action2">Culture</Nav.Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Footer;

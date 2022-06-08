import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import images from "../../assets/images/images.png";
import dashboard from "../../assets/images/profile/dashboard.svg";
import heart from "../../assets/images/profile/heart.svg";
import profile from "../../assets/images/profile/profile.svg";
import purchase from "../../assets/images/profile/purchase.svg";
import setting from "../../assets/images/profile/setting.svg";
import Product from "../../assets/images/trackOrder/product.svg";
import Pagination from "../../Components/Common/Pagination";
import Footer from "../../Components/WebSite/Footer";
import Header from "../../Components/WebSite/Header";
const Profile = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPageNumber, setTotalPageNumber] = useState(5);
  return (
    <>
      <Header />
      <div className="profile_wrapper">
        <Container>
          <Row>
            <Col className="col-md-3 col-xs-12  col-sm-12 left-wrapper">
              <Card className="">
                <Card.Body>
                  <div className="text-center list-unstyled">
                    <img src={images} alt="image" className="profile" />
                    <h5 className="mt-4">Aysha Akhter</h5>
                  </div>

                  <ul className="ms-5 list-unstyled">
                    <li>
                      <img src={dashboard} alt="image" className="me-2" />{" "}
                      Dashboard
                    </li>
                    <li>
                      <img src={purchase} alt="image" className="me-2" />{" "}
                      Purchase History
                    </li>
                    <li>
                      <img src={heart} alt="image" className="me-2" /> Wishlist
                    </li>
                    <li>
                      <img src={profile} alt="image" className="me-2" /> My
                      Profile
                    </li>
                    <li>
                      <img src={setting} alt="image" className="me-2" />{" "}
                      Settings
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-md-9 col-xs-12 col-sm-12 right-wrapper">
              {" "}
              <Card className="">
                <Card.Body>
                  <div className="text-center mb-5">
                    <h4 className="">Wishlist</h4>
                  </div>
                  <div className="table-responsive">
                    <Table className="table table-hover mb-0 table-centered  mb-3 border-none">
                      <thead className="table-light">
                        <tr>
                          <th>Product</th>
                          <th>Amount</th>
                          <th>Remove</th>
                          <th>Add To Cart</th>
                        </tr>
                      </thead>
                      {([1, 2, 3, 4, 5] || []).map((data, key) => {
                        return (
                          <>
                            <tbody>
                              <tr>
                                <td>
                                  <img
                                    src={Product}
                                    alt="image"
                                    style={{ width: "53px" }}
                                    className="me-2"
                                  />
                                  STROLLER Canvas with Dior Oblique Print
                                </td>
                                <td>৳750.00</td>
                                <td>
                                  <i
                                    class="bx bx-trash"
                                    style={{ color: "#F91313" }}
                                  ></i>
                                </td>
                                <td>
                                  <Link to={"/signin"}>
                                    {" "}
                                    <button className="btn btn-default button-orange-padding-small">
                                      <i className="me-2 bx bx-cart"></i>
                                      Cart
                                    </button>
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </>
                        );
                      })}
                    </Table>
                    <Pagination
                      parentClass={`paginationContainer text-right py-3`}
                      reInitialize="reInitialize"
                      page={totalPageNumber}
                      setCurrentPage={setCurrentPage}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Profile;

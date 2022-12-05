import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Combo from "../../Components/WebSite/Combo";
import Footer from "../../Components/WebSite/Footer";
import Header from "../../Components/WebSite/Header";
import Loader from "../../helpers/custom/Loader";
import { getCategoryList, getShopList } from "../../Store/Product/actions";
import construction from "../../assets/images/construction.png";

function Shop() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authToken, shopList, shopListLoading, role } = useSelector((state) => ({
    authToken: state.loginReducer.token,
    shopList: state.ProductReducer.shopList,
    shopListLoading: state.ProductReducer.shopListLoading,
    role: state.loginReducer.role,
    // adding: state.coupon.adding,
  }));
  console.log("categoryList", shopList, shopListLoading);
  useEffect(() => {
    dispatch(getShopList(authToken));
  }, []);
  return (
    <>
      <Header />
      <div className="CategoryList_wrapper">
        <Container>
          <Row>
            <div className="browse_category_wraper">
              <Container>
                <Row>
                  <p className="mb-1 custom_text_design">- The Shop</p>
                  <h3 className="mb-5">Browse by Shop</h3>
                  {
                  role === "SELLER" ?<div className="text-end">
                  <Button
                    className="btn btn-waring mb-3"
                    onClick={() => {
                      history.push("/create-shop");
                    }}
                  >
                    Create Shop
                  </Button>
                </div>: <span></span>
                  }
                  
                  {shopListLoading ? (
                    <div className="d-flex justify-content-center">
                      <Loader />
                    </div>
                  ) : shopList?.data?.shop?.length > 0 ? (
                    shopList?.data?.shop?.map((data, idx) => (
                      <Col md={3}>
                        <Card style={{ width: "18rem" }}>
                          <Card.Img variant="top" src={data?.image} style={{height:"200px"}}/>
                          <Card.Body>
                            <Card.Title className="mb-4 text-center">{data?.name}</Card.Title>
                            <Card.Text className="mt-2 mb-3">
                              <span className="fw-bold">Categories: </span> {data?.aboutShop}
                            </Card.Text>
                            <Card.Text className="mt-2 mb-3">
                              <span className="fw-bold">Address: </span> {data?.address}
                            </Card.Text>
                            <Button variant="primary">View Shop</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))
                  ) : (
                    <div className="text-center">
                      <h5>No shop Available</h5>
                    </div>
                  )}
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

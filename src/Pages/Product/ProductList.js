import React from "react";
import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../../Components/WebSite/Header";
import { getProduct } from "../../Store/Product/actions";

const ProductList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authToken, productList, productListLoading, role } = useSelector(
    (state) => ({
      authToken: state.loginReducer.token,
      role: state.loginReducer.role,
      productList: state.ProductReducer.productList,
      productListLoading: state.ProductReducer.productListLoading,
      // adding: state.coupon.adding,
    })
  );
  console.log("role", role);
  console.log("categoryList", productList, productListLoading);
  useEffect(() => {
    dispatch(getProduct(authToken));
  }, []);
  return (
    <>
      <Header />
      <div>
        <div className="explore_product_wraper">
          <Container>
            <Row>
              <p className="mb-1 custom_text_design">- Our Products</p>
              <h3 className="mb-5">Explore our Products</h3>
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

              {(productList?.data || []).map((data, key) => {
                return (
                  <>
                    <Col md={3}>
                      <Card className="card_wrapper mb-4">
                        <div className="card_img">
                          <Card.Img
                            variant="top"
                            alt="Image"
                            src={data?.image}
                            style={{ height: "200PX", width: "100%" }}
                          />
                        </div>

                        <Card.Body>
                          <div className="card_body_wrapper">
                            <h5 className="mb-3">{data?.productName}</h5>
                            <h6 className="mb-3">{data?.categories}</h6>
                            <h3>৳ {data?.price}</h3>
                          </div>
                          <div>
                            <button className="btn btn-dark mt-3">
                              Add to cart
                            </button>
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
    </>
  );
};

export default ProductList;

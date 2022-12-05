import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import employeeImage from "../../assets/images/2852242.jpg";
import Header from "../../Components/WebSite/Header";
import { getProduct, getService } from "../../Store/Product/actions";
const personList = [
  {
    name: "Karim",
    Phone: "01829298392",
    profession: "Carpenter",
    hour: "1",
    price: "120",
  },
  {
    name: "Rahima",
    Phone: "0171738392",
    profession: "House maid",
    hour: "1",
    price: "100",
  },
  {
    name: "Hasan",
    Phone: "01717983822",
    profession: "Plumber",
    hour: "1",
    price: "200",
  },
  {
    name: "Tamim",
    Phone: "0171738392",
    profession: "Electrician",
    hour: "1",
    price: "200",
  },
  {
    name: "Rahima",
    Phone: "0171738392",
    profession: "House maid",
    hour: "1",
    price: "100",
  },
  {
    name: "Karim",
    Phone: "01829298392",
    profession: "Carpenter",
    hour: "1",
    price: "120",
  },
  {
    name: "Rahima",
    Phone: "0171738392",
    profession: "House maid",
    hour: "1",
    price: "100",
  },
  {
    name: "Hasan",
    Phone: "01717983822",
    profession: "Plumber",
    hour: "1",
    price: "200",
  },
  {
    name: "Tamim",
    Phone: "0171738392",
    profession: "Electrician",
    hour: "1",
    price: "200",
  },
  {
    name: "Rahima",
    Phone: "0171738392",
    profession: "House maid",
    hour: "1",
    price: "100",
  },
];

const EmployeeList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authToken, employeeList, employeeLoading, role } = useSelector(
    (state) => ({
      authToken: state.loginReducer.token,
      role: state.loginReducer.role,
      employeeList: state.ProductReducer.employeeList,
      employeeLoading: state.ProductReducer.employeeLoading,
      // adding: state.coupon.adding,
    })
  );
  console.log("role", role);
  console.log("categoryList", employeeList, employeeLoading);
  useEffect(() => {
    dispatch(getProduct(authToken));
  }, []);
  useEffect(() => {
    dispatch(getService(authToken));
  }, []);
  return (
    <>
      <Header />
      <div>
        <div className="explore_product_wraper">
          <Container>
            <Row>
              <p className="mb-1 custom_text_design">- Our Services</p>
              <h3 className="mb-5">Explore our Services</h3>
              {role === "SELLER" ? (
                <div className="text-end mb-3">
                  <Button
                    className="btn btn-waring "
                    onClick={() => {
                      history.push("/create-employee");
                    }}
                  >
                    Create Service
                  </Button>
                </div>
              ) : (
                <span></span>
              )}

              {(employeeList?.data || []).map((data, key) => {
                return (
                  <>
                    <Col md={3}>
                      <Card className="card_wrapper mb-4">
                        <div className="card_img">
                          <Card.Img
                            variant="top"
                            alt="Image"
                            src={data?.image}
                            style={{height:"200px"}}
                          />
                        </div>

                        <Card.Body>
                          <div className="card_body_wrapper text-center">
                            <h4 className="text-dark mb-3">
                              {data?.profession}
                            </h4>
                            <h5 className="mb-3 text-warning">{data?.serviceName}</h5>

                            <h6 className="mb-3">৳ {data?.price} per hour</h6>
                            <p className="mb-3">৳ {data?.mobileNumber}</p>
                            <Button className="btn btn-dark text-center">
                              Book Now
                            </Button>
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

export default EmployeeList;

import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ProductList = () => {
  const history = useHistory()
    return (
        <div>
              <div className="explore_product_wraper">
          <Container>
            <Row>
              <p className="mb-1 custom_text_design">- Our Products</p>
              <h3 className="mb-5">Explore our Products</h3>
              <div className="text-end">
                    <Button className="btn btn-waring " onClick={()=>{
                        history.push('/create-product')
                    }}>Create Shop</Button>
                  </div>

              {([0,1,2] || []).map((data, key) => {
                return (
                  <>
                    <Col md={3}>
                      <Card className="card_wrapper mb-4">
                        <div className="card_img">
                          <Card.Img variant="top" alt="Image" src={data?.img} />
                        </div>

                        <Card.Body>
                          <div className="card_body_wrapper">
                            <h5 className="mb-3">
                             {data?.name}
                            </h5>
                            <h6 className="mb-3">
                             {data?.categories}
                            </h6>
                            <h3>৳ {data?.price}</h3>
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
    );
};

export default ProductList;
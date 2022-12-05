
import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Select from "react-select"
import { Label } from "reactstrap";
import Footer from "../../Components/WebSite/Footer";
import Header from "../../Components/WebSite/Header";
import { loginUser } from "../../Store/login/actions";
import { createProduct, createShop, getCategoryList, getShopList } from "../../Store/Product/actions";

const CreateProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("")
  const [shop, setShop] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedShop, setSelectedShop] = useState('')
  const [file, setfile] = useState("")
 
  const { authToken , loginId, categoryList,categoryListLoading, shopList, shopListLoading, adding} = useSelector((state) => ({
    authToken: state.loginReducer.token,
    loginId: state.loginReducer.id,
    categoryList: state.ProductReducer.categoryList,
    categoryListLoading: state.ProductReducer.categoryListLoading,
    shopList: state.ProductReducer.shopList,
    shopListLoading: state.ProductReducer.shopListLoading,
    adding:  state.ProductReducer.adding,
    // adding: state.coupon.adding,
  }));
  console.log('shopList', shopList);
  const handleChangeCategory = value => {
    console.log('value', value);
    setSelectedCategory(value._id)
  }
  const handleShop = value => {
    console.log('value', value);
    setSelectedShop(value._id)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData()
    formdata.append("productName", name)
    formdata.append("shop", selectedShop)
    formdata.append("category", selectedCategory)
    formdata.append("price", price)
    formdata.append("image", file)

   
    dispatch(createProduct(formdata, history, authToken));
  };
  useEffect(()=>{
    dispatch(getCategoryList(authToken))
},[])
useEffect(() => {
  dispatch(getShopList(authToken));
}, []);
  return (
    <>
      <Header />
      <div className="Sign_in_form">
 
 
        <Container>
          <p className="mb-1 custom_text_design">- Shop</p>
          <h3 className="mb-5">Create Shop</h3>
          <Row>
            <Col className="col-md-8 offset-md-2  mb-5 form_inner">
              <div className="pb-5 ">
                <Row>
                  <Col className="col-md-8 offset-md-2">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label> Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Type product Name"
                          name="productName"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Form.Group>
                     
                      <Form.Group className="mb-3">
                        <Form.Label> Shop</Form.Label>
                        <Select
                            name="shop"
                            getOptionLabel={e => e.name}
                            getOptionValue={e => e._id}
                            options={shopList?.data?.shop}
                            required
                            errorMessage="Please select shop name"
                            validate={{ required: { value: true } }}
                            onChange={handleShop}
                          />
                      </Form.Group>
                   
                      <Form.Group className="mb-3">
                        <Form.Label> Category</Form.Label>
                        <Select
                            name="category"
                            getOptionLabel={e => e.categoryName}
                            getOptionValue={e => e._id}
                            options={categoryList?.category}
                            required
                            errorMessage="Please select category name"
                            validate={{ required: { value: true } }}
                            onChange={handleChangeCategory}
                          />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Type Price"
                          name="price"
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </Form.Group>
                  
                      <Form.Group className="mb-3">
                        <Form.Label>Photo</Form.Label>
                        <Form.Control
                          type="file"
                          placeholder="Upload photo"
                          name="image"
                          onChange={e => {
                            setfile(e.target.files[0])
                          }}
                        />
                      </Form.Group>
                
              
              

                     
                  
                      <Button
                        type="submit"
                        className="btn btn-default mt-5"
                        style={{ width: "100%" }}
                        disabled={adding}
                      >
                       {
                        adding? "Submitting" : "Submit"
                       } 
                      </Button>
                    </Form>
                   
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default CreateProduct;

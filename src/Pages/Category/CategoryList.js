import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Combo from "../../Components/WebSite/Combo";
import Footer from "../../Components/WebSite/Footer";
import Header from "../../Components/WebSite/Header";
import Loader from "../../helpers/custom/Loader";
import { getCategoryList } from "../../Store/Product/actions";
import construction from "../../assets/images/construction.png";


function CategoryList() {
    const history = useHistory()
    const dispatch = useDispatch()
    const { authToken, categoryList, categoryListLoading, role } = useSelector((state) => ({
        authToken: state.loginReducer.token,
        categoryList: state.ProductReducer.categoryList,
        categoryListLoading: state.ProductReducer.categoryListLoading,
        role: state.loginReducer.role,
        // adding: state.coupon.adding,
      }));
      console.log('categoryList', categoryList, categoryListLoading);
    useEffect(()=>{
        dispatch(getCategoryList(authToken))
    },[])
  return (
    <>
      <Header />
      <div className="CategoryList_wrapper">
        <Container>
          <Row>
            <div className="browse_category_wraper">
              <Container>
                <Row>
                  <p className="mb-1 custom_text_design">- The Categories</p>
                  <h3 className="mb-5">Browse by Category</h3>
                  {
                    role === "SELLER" ? <div className="text-end">
                    <Button className="btn btn-waring " onClick={()=>{
                        history.push('/category-add')
                    }}>Create category</Button>
                  </div> :
                  <span></span>
                  }
                  
                  {categoryListLoading ? (
            <div className="d-flex justify-content-center">
              <Loader />
            </div>
          ) : categoryList?.category?.length > 0 ? (
            categoryList?.category?.map((data, idx) => (

                  <Col md={2}>
                    <div>
                      <div
                        className="img_area"
                        style={{ background: "#D9ECFA" }}
                      >
                        <img
                          alt="Image"
                          style={{ width: "100px", height: "100px" , margin:"20px 20px"}}
                          src={construction}
                          
                        />
                      </div>
                      <h6 className="text-center mt-4 mb-4">{data?.categoryName}</h6>
                    </div>
                  </Col>
     ))
     ) : (
       <div className="text-center">
         <h5>No Blog Available</h5>
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

export default CategoryList;

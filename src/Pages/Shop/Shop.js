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
    
      <section class="container mt-5 mb-5">
        <h1>দোকান তালিকা:</h1>

        <div class="row row-cols-1 row-cols-md-4 g-4 mt-4">
          
        {(shopList?.data?.shop || []).map((data, key) => {
                return (
                  <>
            <div class="col single-shoe">
                <div class="card h-80 border-0 bg-white shadow">
                    <div class="shoe-image bg-light rounded m-3">
                        <img src={data?.image} class="card-img-top " alt="..."/>

                    </div>
                    <div class="card-body">
                        <h5 class="card-title"> {data?.name}</h5>
                        <p class="card-text"> {data?.aboutShop}</p>
                        <div class="price-info d-flex align-items-center mt-3">
                          
                            <button class="btn btn-primary ms-auto" onClick={()=>
                            history.push(`/shop/${data?._id}`)}>পণ্য দেখুন</button>
                            {
                              role === "SELLER" ? <button class="btn btn-primary ms-auto " onClick={()=>
                                history.push(`/shopOrder/${data?._id}`)}>অর্ডার দেখুন</button>: ""
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
            </>
                );
              })}

        </div>
    </section>

      <Footer />
    </>
  );
}

export default Shop;

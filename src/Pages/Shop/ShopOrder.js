import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../Components/WebSite/Header";
import { getShopOrder, getUserOrder } from "../../Store/Order/actions";

const ShopOrder = () => {
  const dispatch = useDispatch();
  const {id} = useParams()
    const { authToken, loginId, productListLoading, role,  userOrder, shopOrder} = useSelector(
        (state) => ({
          authToken: state.loginReducer.token,
          role: state.loginReducer.role,
          productList: state.ProductReducer.productList,
          productListLoading: state.ProductReducer.productListLoading,
          cart: state.CardReducer.cart,
          loginId: state.loginReducer.id,
          shopOrder: state.OrderReducer.shopOrder,
          // adding: state.coupon.adding,
        })
      );
      console.log('shopOrder', shopOrder);
      useEffect(() => {
        console.log('kkk', id);
        if(id){
            dispatch(getShopOrder(authToken, id));
        }
        
      }, []);
     
  return (
    <>
    <Header/>
    <div className="container">
      <h5 className="mb-3 mt-3">Order History</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Order Id</th>
            <th>Order Date</th>
            <th>Shop Name</th>
            <th>Status</th>
            <th>Price</th>
            
          </tr>
        </thead>
        <tbody>
        {(shopOrder?.data?.data || []).map((data, key) => {
                return (
                  <>
          <tr>
            <td>{key+1}</td>
            <td>{data?._id?.slice(3,7)}</td>
            <td>{data?.orderDate?.slice(0,10)}</td>
            <td>{data?.shopId?.name}</td>
            <td>{data?.orderStatus}</td>
            <td>{data?.orderPrice}</td>
          </tr>
          </>
                );
              })}
       
        </tbody>
      </Table>
    </div>
    </>
  );
};

export default ShopOrder;

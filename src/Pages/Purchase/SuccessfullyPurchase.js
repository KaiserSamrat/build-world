import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../Components/WebSite/Header";

import successfullImage from "./img/succsessfull.png";
import "./successfully-purchase.scss";
function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const SuccessfullyPurchase = () => {
  const dispatch = useDispatch();
  let query = useQuery();

  return (
    <>
     <Header />
    <div className="successfully-purchase-area">
      <Container>
        <div className="successfully-purchase-area-inner-wrap">
          <div>
            <img src={successfullImage} alt="" />
            <h6>
              Thank you for your purchase. You can now see your <br /> package
              in <Link to="/userOrderHistory">dashboard</Link>
            </h6>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
};

export default SuccessfullyPurchase;

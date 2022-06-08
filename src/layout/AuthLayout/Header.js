import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <div className="d-flex gap-2">
        <Link to={"/admin-dashobard"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/demo-formik"}>Formik</Link>
      </div>
    </React.Fragment>
  );
};

export default Header;

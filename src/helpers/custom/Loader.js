import React from "react"

const Loader = ({ className }) => {
  return (
    <React.Fragment>
      <div className={className}>
        <div className="d-flex justify-content-center align-items-center ">
          <i className="bx bx-loader bx-spin" style={{ color: "#5d5d5d" }}></i>{" "}
          Loading...
        </div>
      </div>
    </React.Fragment>
  )
}

export default Loader

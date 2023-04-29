import React from 'react'
import "./shimmer.css"
function Shimmer() {
  return (
    <div className="resturant-list" id="resturant_body">
      {Array(15)
        .fill("")
        .map((e, index) => (
          //   <div
          //     key={index}
          //     className="card mt-5 mb-2 me-2 d-flex"
          //     style={{
          //       width: "23rem",
          //       backgroundColor: "lightgray",
          //       height: "18rem",
          //     }}
          //   >
          //     <div className="card-body "></div>
          //   </div>
          <div
            className="resturant_Card"
            key={index}
            style={{
              width: "23rem",
              backgroundColor: "lightgray",
              height: "18rem",
            }}
          >
            <div style={{ position: "relative" }}></div>
            <div className="card-body "></div>

            <div></div>
          </div>
        ))}
    </div>
  );
}

export default Shimmer
import React from 'react'
import "./resturantCartItem.css"
import { IMG_CDN_URL } from '../Config';
function ResturantCartItem({ name, category, imageId, price }) {
  return (
    <div className="resturant_Card">
      <div style={{ position: "relative" }}>
        <img className="card_img" src={IMG_CDN_URL + imageId} alt="" />
      </div>
      <div className="card-body ">
        <h5 className="card-title">{name}</h5>
        <div
          style={{ justifyContent: "space-between", display: "flex" }}
        >
          <p>{category}</p>
          <p>{price}</p>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default ResturantCartItem
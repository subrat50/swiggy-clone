import React from 'react'
import { IMG_CDN_URL } from '../Config';
import "./resturantCard.css"
function ResturantCard({
  name,
  cuisines,
  costForTwoString,
  avgRating,
  deliveryTime,
  area,
  cloudinaryImageId,
}) {
  return (
    <div className="resturant_Card">
      <div style={{ position: "relative" }}>
        <img
          className="card_img"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt=""/>
      </div>
      <div className="card-body ">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{cuisines.join(",")}</p>
            <div style={{ justifyContent: "space-between",display:'flex' }}>
              <p className='card_rating'><i className="fa-solid fa-star"></i>{avgRating}
              </p>
              <p>{costForTwoString}</p>
              <p>{area}</p>
            </div>
            </div>

      <div></div>
    </div>
  );
}

export default ResturantCard
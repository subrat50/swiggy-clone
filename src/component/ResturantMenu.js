import React from 'react'
import UseRestaurant from "../util/useResturant"
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../Config';
import { useDispatch } from 'react-redux';
import "./resturantMenu.css"
import { addItem } from '../cartSlice';
function ResturantMenu() {
    const { resid } = useParams();
    const restaurant = UseRestaurant(resid);
    const dispatch=useDispatch()
    const handleAddItem=(item)=>{
      dispatch(addItem(item));
    }
   return restaurant== null ? (
     "no data"
   ) : (
     <>
       <section
         style={{ backgroundColor: "black", color: "white" }}
       >
         <div className="container">
           <div className=" resturant_row" style={{ padding: "2rem" }}>
             <div >
               <img
                 className="resturant_img"
                 src={
                   IMG_CDN_URL +
                   restaurant.cards[0].card.card.info.cloudinaryImageId
                 }
                 alt="resturant image"
               />
             </div>
             <div >
               <h3>{restaurant.cards[0].card.card.info.name}</h3>
               <small>Indian</small>
               <p>
                 {restaurant.cards[0].card.card.info.areaName +
                   "," +
                   "," +
                   restaurant.cards[0].card.card.info.slugs.city}
               </p>
               <div
                 className="resturant_star"
                 style={{ justifyContent: "space-between" }}
               >
                 <p>
                   <i className="fa-solid fa-star"></i>
                   {restaurant.cards[0].card.card.info.avgRating}
                 </p>
                 <p>
                   {restaurant.cards[0].card.card.info.sla.deliveryTime}MINS
                 </p>
                 <p>{restaurant.cards[0].card.card.info.costForTwoMsg}</p>
               </div>
             </div>
           </div>
         </div>
       </section>

       <section className="main">
         <div className="container">
           <div className="row">
             
             <div className="resturant_body" id="resturant_body">
               {Object.values(
                 restaurant?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1]
                   .card.card.itemCards
               ).map((item) => {
                 return (
                   <div className="resturant_Card">
                     <div style={{ position: "relative" }}>
                       <img
                         className="card_img"
                         src={IMG_CDN_URL + item.card.info.imageId}
                         alt=""
                       />
                     </div>
                     <div className="card-body ">
                       <h5 className="card-title">{item.card.info.name}</h5>
                       <div
                         style={{
                           justifyContent: "space-between",
                           display: "flex",
                         }}
                       >
                         <p className='price'>{item.card.info.price}</p>
                       </div>
                       <button
                         className="btn btn-primary add_btn"
                         onClick={() => handleAddItem(item.card.info)}
                       >
                         Add item
                       </button>
                     </div>

                     <div></div>
                   </div>
                 );
               })}
             </div>
           </div>
         </div>
       </section>
     </>
   );
}

export default ResturantMenu
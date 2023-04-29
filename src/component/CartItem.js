import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ResturantCartItem from './ResturantCartItem';
import { CART_EMPTY_URL } from '../Config';
import "./cartItem.css"
import { clearCart } from '../cartSlice';
function CartItem() {
    const dispatch=useDispatch()
const cartItems = useSelector((store) =>
  store.cart.items
);    console.log(cartItems,"cart")
const handlerClearCart = () => {
  dispatch(clearCart());
};
  return (
    <div className="cartItems">
      {cartItems.length === 0 ? (
        <div>
          <img
            id="resturant_body"
            className="cart_empty_img"
            src={CART_EMPTY_URL}
          />
          <h5 id="resturant_body">Your Cart Is Empty</h5>
          <p id="resturant_body">
            You can go to home page to view more restaurants
          </p>
        </div>
      ) : (
        <div>
          <button onClick={handlerClearCart} className="clear_btn">Clear Cart</button>
          <div id="resturant_body">
            {cartItems.map((item) => (
              <ResturantCartItem key={item._id} {...item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem
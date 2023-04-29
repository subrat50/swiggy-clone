import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./navbar.css"
function Navbar() {
const cartItems=useSelector((store)=>store.cart.items);
console.log(cartItems)
  return (
    <header>
      <div class="navbar">
        <div class="logo">
          <Link to="/" style={{ color: "black" }}>
            Mehefil
          </Link>
        </div>
        <ul class="links">
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/cartItem">
              Cart-<span className="span">{cartItems.length}items</span>
            </Link>
          </li>
        </ul>
      </div>
      
    </header>
  );
}

export default Navbar
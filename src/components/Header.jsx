import React from 'react'

import { Link, Navigate, useNavigate } from 'react-router-dom'
import Cart from './reducers/Cart'
import Home from './Home/Home'
import LoginF from './Login/LoginF'
import amazon from "../components/assets/amazon.png"
import cart from  "../components/assets/cart.png"
// import { cartItem } from './reducers/Cart'
import { useSelector } from 'react-redux'

import { productReducer } from './reducers/productReducer'


export default function Header({logout} ) {
  const cartItem = useSelector((state) => state.cart);
const navigate = useNavigate();

const handleLogout = () => {
  navigate("/");
  logout();
  localStorage.clear("Email");
  localStorage.clear("Password");
  
  
};

  return (
    <>
      <div className="header">
        <img src={amazon} className="logo"></img>
        <input type="text" placeholder="Search.." name="search" className='search' />
        <div className="dropdown">
          <button className="dropbtn">Filters</button>
          <div className="dropdown-content">
            <a href="#">smartphones</a>
            <a href="#">laptopsss</a>
            <a href="#">fragrances</a>
            <a href="#">skincare</a>
            <a href="#">gro</a>
            {/* <a href="#">home-decoration</a> */}
          </div>
        </div>

        <div>
          <img src={cart} className='cart-button' onClick={() => navigate("/cart")}>
          </img><span className='cart-number'>{cartItem.length}</span>
        </div>
        <div>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        <div className="header-right">
          <a className="active" onClick={() => navigate("/Home")}>Home</a>
          
        


          
        </div>
      </div>


    </>

  )
}

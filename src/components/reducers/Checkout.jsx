import React from 'react'
import ordered from "../assets/done.gif"
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
  const navigate=useNavigate();

  return (
    <>
    <div className="cart-nav">
          
          <button className="cart-home" onClick={() => navigate("/Home")}>Home</button>
            </div>
 <h1>YOUR ORDER HAS BEEN PLACED SUCCESSFULLY </h1>
    <img className='ordered' src={ordered}/>
    </>
   
  )
}

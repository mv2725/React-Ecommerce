import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";

import Orders from "./Orders";

export default function Cart() {
  const cartItem = useSelector((state) => state.cart);
  console.log("cartitem", cartItem);
  const dispatch = useDispatch();
  const addition =(acc,currentvalue)=>{
    return acc + currentvalue.price * currentvalue.quantity;
  }
  const total = cartItem.reduce(addition,0)
  const navigate = useNavigate();

  return (
    <>
    <div className="cart-nav">
          
          <button className="cart-home" onClick={() => navigate("/Home")}>Home</button>
            </div>
            
      <div>
        {cartItem.map((product, index) => {
          return (
            <>
            
              {/* <div className="column" style={{ backgroundColor: "white" }}> </div>*/}

              <div className="cart-container" key={index}>
                <div className="cart-direction">
                  <div className="cart-image">
                    <img src={product.images[0]} alt={product.images[1]} />
                  </div>

                  <div className="cart-content">
                    {/* <p className="cart-id"> Id: {product.id}</p> */}
                    <p className="cart-title"> Title:{product.title}</p>
                    {/* <p className="cart-des">
                      Description:{product.description}
                    </p> */}
                    <p> Category:{product.category} </p>
                    <div className="cart-price">
                      <p className="price">price:${product.price}</p>
                      <p className="amount">
                        amount:${product.quantity * product.price}
                      </p>
                    </div>
                  </div>
                  <div className="add-sub">
                    <button class="sub-button" onClick={() =>{
                      if(product.quantity > 1){
                        dispatch({ type: "decrease", payload: product })
                      }
                      else{
                        dispatch({ type: "Remove", payload: product })
                      }
                    }
                         
                         
                        } >-</button>
                    <span className="number">{product.quantity}</span>
                    <button class="add-button " onClick={() => dispatch({ type: "increase", payload: product })
                        }>+</button>
                    <div>
                      <button
                        className="remove-btn"
                        onClick={() =>
                          dispatch({ type: "Remove", payload: product })
                        }
                      >
                        <i class="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
            </>
            
          );
          
        })}
      </div>
    <div>{total > 0 && <h2>Total:{total}</h2>}</div>
 
      <div className="checkout-form">

        <form className="form">
        <div className="input-field">
            <label>Name:</label>
            <br />
            <div className="input">
            <input type="text"/>
            </div>
           
          </div>
          <div className="checkout-number">
            <label>Number:</label>
            <br />
            <div className="input">
            <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
            </div>
           
          </div>
          <div className="checkout-address">
            <label>Address:</label>
            <br />
            <div className="input">
            <textarea type="text"  />
            </div>
            
          </div>
        </form>
      </div>
      <button onClick={() => navigate("/checkout")} className="checkout-button">Order Now</button>
    </>
  );
}



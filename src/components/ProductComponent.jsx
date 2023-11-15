import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartReducer } from "./reducers/productReducer";




 const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.products);
  const dispatch = useDispatch();
  
 
 

  const renderList = 
  products.map((product) => {

    const { id, title, images, description, price, category } = product;
    product.quantity=1;
    return (
      <>
        {/* <h2>productComponent</h2> */}
        
        
        
        
        
        
        <div className="card-main">
        <div className="card">
          <div className="column" style={{ backgroundColor: "white" }}>
            <img src={images[0]} alt="" className="image" />
            <div className="container">
              <p  className="title"> Id: {id}</p>
              <p className="title"> Title:{title}</p>
              <p className="des">Description:{description}</p>
              <p> Category:{category} </p>
              <div className="content">
                <p className="price">price:${price}</p>
                <p><button className="add-cart" onClick={()=>dispatch({type: "ADD" , payload:product}) }>Add to Cart</button></p>
              </div>
            </div>

          </div>
        </div>
        </div>
        
      </>
    );
  });

  // const {id ,type}= products[0];
  console.log("state", products);

  return (
    <>
      <div className="card1">{renderList}</div>
    </>
  );
};

export default ProductComponent;
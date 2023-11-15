import { Route,Routes, useNavigate } from "react-router-dom";
import React from 'react'
import Cart from "./Cart";
import Home from "../Home/Home";
import Checkout from "./Checkout";
import LoginF from "../Login/LoginF";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
;

export default function RootRoute() {
  
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const us = localStorage.getItem("user",user);

    us && JSON.parse(us) ? setUser(true) : setUser(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

 

  return (
    <Routes>

         
            <Route
              path="/"
              element={<LoginF authenticate={() => setUser(true)} />}
            />
          
            
          {user &&
          
           ( <>
            <Route
                path="/Home"
                element={<Home logout={() => setUser(false)} />}
              />
            </>
          )}
          <Route
            path="*"
            element={<Navigate to={user ? "/Home" : "/"}  />}
          />
        
        <Route path="" element={<Home/>}></Route>
        
        <Route path="/cart" element={<Cart/>}/>
    
        <Route path="/Checkout" element={<Checkout/>}>
        </Route>
    </Routes>
  )
}

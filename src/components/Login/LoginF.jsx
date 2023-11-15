import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function LoginF({ authenticate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
 
  const submitForm = (e) => {
    e.preventDefault();

    if (email === "meetvyas@416" && password === "12345") {
      localStorage.setItem("Email", "meetvyas@416");
      localStorage.setItem("Password", "12345");
      navigate("/Home");
      authenticate();
    } else {
      alert("email or password is incorrect");
    }
  };
 

  return (
    <>
      <div className="login">
        <div className="Login-form">
          <form className="loginform">
            <div className="form-container">
            <h3 className="login-head">LOGIN HERE</h3>
              <div className="emailpass">
              <div className="email-container">
              <label className="login-head">Enter Email:</label><br/>
                <input
                  className="login-button-inut email"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="password-container">
              <label className="login-head">Enter Password:</label><br/>
                <input
                  className="login-button-inut password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            
              </div>
</div>

            <button className="login-button" onClick={submitForm}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default LoginF;

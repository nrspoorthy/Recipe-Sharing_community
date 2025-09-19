import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "student" && password === "student@2025") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (

    <div className="bg-login">
        
    <div className="login-container" data-aos="fade-up" data-aos-delay="100" >
        <h1>Delicious</h1>
        <h2>Recipes</h2>

        <img 
            src="https://foodily.vercel.app/assets/images/icons/icon-1.png" 
            alt="decor icon" 
            className="decor-login decor-left-login"
            data-aos = "fade-right"
            data-aos-delay="600" 
        />
        <img 
            src="https://foodily.vercel.app/assets/images/icons/icon-1.png" 
            alt="decor icon" 
            className="decor-login decor-right-login"
            data-aos = "fade-left"
            data-aos-delay="600"
        />
      <div className="login-box">
        {/* <h2 className="title-2">Login</h2> */}
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

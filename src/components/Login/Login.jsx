import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const[username,Setusername] = useState("")
    const[password,Setpassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = () => {
        if(username === "student" && password==="student@2025"){
            localStorage.setItem("isAuthenticated", "true")
            navigate("/")
        }else{
            alert("Invalid Credentials")
        }
    }

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => Setusername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => Setpassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
  )
}

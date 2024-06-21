import React from 'react'
import "./Login.css"

function Login() {
  return (
    <form className="loginForm">
        <label>Username
            <input type="text" ></input>
        </label>
        <label>Email
            <input type="email" ></input>
        </label>
        <label>Password
            <input type="password" ></input>
        </label>
        <button>Login</button>
    </form>
  )
}

export default Login;
import React from 'react'
import "./Register.css"

function Register() {
  return (
    <form className="registerForm">
        <label>Username
            <input type="text" ></input>
        </label>
        <label>Email
            <input type="email" ></input>
        </label>
        <label>Password
            <input type="password" ></input>
        </label>
        <label>Address
            <input type="text" ></input>
        </label>
        <label>Branch
            <input type="text" ></input>
        </label>
        <label>Section
            <input type="text" ></input>
        </label>
        <label>Year
            <input type="text" ></input>
        </label>
        <label>Company
            <input type="text" ></input>
        </label>
        <label>College
            <input type="text" ></input>
        </label>
        <label>City
            <input type="text" ></input>
        </label>
        <label>State
            <input type="text" ></input>
        </label>
        <label>Pin code
            <input type="text" ></input>
        </label>
        <label>Country
            <input type="text" ></input>
        </label>
        <button>Submit</button>
    </form>
    
  )
}

export default Register
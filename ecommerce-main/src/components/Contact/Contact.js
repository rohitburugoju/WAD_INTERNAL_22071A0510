import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <form className="contactForm">
        <label>Email
            <input type="email" ></input>
        </label>
        <label>Enter your concern
            <input type="type" ></input>
        </label>
        <button>Submit your concern</button>
    </form>
  )
}

export default Contact
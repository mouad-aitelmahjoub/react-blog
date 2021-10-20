import React from "react"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="register">
      <span className="register__title">Register</span>
      <form className="register__form">
        <label>Username</label>
        <input className="register__input" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="register__input" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="register__input" type="password" placeholder="Enter your password..." />
        <button className="register__button">Register</button>
      </form>
      <Link to="/login">
        <button className="register__login">Login</button>
      </Link>
    </div>
  )
}

export default Register

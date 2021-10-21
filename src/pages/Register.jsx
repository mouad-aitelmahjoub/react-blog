import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("/auth/register", { username, email, password })
      response.data && window.location.replace("/login")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="register">
      <span className="register__title">Register</span>
      <form className="register__form" onSubmit={handleFormSubmit}>
        <label>Username</label>
        <input className="register__input" type="text" placeholder="Enter your username..." onChange={(e) => setUsername(e.target.value)} />
        <label>Email</label>
        <input className="register__input" type="text" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input className="register__input" type="password" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)} />
        <button className="register__button" type="submit">
          Register
        </button>
      </form>
      <Link to="/login">
        <button className="register__login">Login</button>
      </Link>
    </div>
  )
}

export default Register

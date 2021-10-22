import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../redux/userSlice"
import { Link } from "react-router-dom"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("/auth/login", { username, password })
      dispatch(login({ user: response.data }))
      //window.location.replace("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="login">
      <span className="login__title">Login</span>
      <form className="login__form" onSubmit={handleFormSubmit}>
        <label>Username</label>
        <input className="login__input" type="text" placeholder="Enter your username..." onChange={(e) => setUsername(e.target.value)} />
        <label>Password</label>
        <input className="login__input" type="password" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)} />
        <button className="login__button" type="submit">
          Login
        </button>
      </form>
      <Link to="/register">
        <button className="login__register">Register</button>
      </Link>
    </div>
  )
}

export default Login

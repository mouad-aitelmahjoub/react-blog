import React from "react"
import { Link } from "react-router-dom"
import profilePic from "../assets/images/user-1.jpg"

const Topbar = () => {
  const user = false
  return (
    <div className="top">
      <div className="top__left">
        <i className="top__icon fab fa-facebook-square"></i>
        <i className="top__icon fab fa-twitter-square"></i>
        <i className="top__icon fab fa-pinterest-square"></i>
        <i className="top__icon fab fa-instagram-square"></i>
      </div>
      <div className="top__center">
        <ul className="top__list">
          <li className="top__list-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="top__list-item">
            <Link to="/">ABOUT</Link>
          </li>
          <li className="top__list-item">
            <Link to="/">CONTACT</Link>
          </li>
          <li className="top__list-item">{user && <Link to="/write">WRITE</Link>}</li>
          <li className="top__list-item">{user && <Link to="/">LOGOUT</Link>}</li>
        </ul>
      </div>
      <div className="top__right">
        {user ? <img className="top__image" src={profilePic} alt="profile" /> : <Link to="/login">LOGIN</Link>}
        <i className="top__icon-search fas fa-search"></i>
      </div>
    </div>
  )
}

export default Topbar

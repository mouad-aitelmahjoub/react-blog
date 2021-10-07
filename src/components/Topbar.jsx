import React from "react"
import profilePic from "../assets/images/user-1.jpg"

const Topbar = () => {
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
          <li className="top__list-item">HOME</li>
          <li className="top__list-item">ABOUT</li>
          <li className="top__list-item">CONTACT</li>
          <li className="top__list-item">WRITE</li>
          <li className="top__list-item">LOGOUT</li>
        </ul>
      </div>
      <div className="top__right">
        <img className="top__image" src={profilePic} alt="profile" />
        <i className="top__icon-search fas fa-search"></i>
      </div>
    </div>
  )
}

export default Topbar

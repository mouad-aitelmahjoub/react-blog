import React from "react"
import RiverBg from "../assets/images/river-bg.jpg"

function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <span className="header__title-sm">React & Node</span>
        <span className="header__title-lg">Blog</span>
      </div>
      <img className="header__img" src={RiverBg} alt="background" />
    </div>
  )
}

export default Header

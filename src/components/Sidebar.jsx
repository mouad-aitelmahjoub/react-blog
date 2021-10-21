import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AboutMeImg from "../assets/images/woman-profile.jpg"

const Sidebar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("/category")
      setCategories(response.data)
    }
    fetchCategories()
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__title">About Me</span>
        <img src={AboutMeImg} alt="" className="sidebar__img" />
        <p className="sidebar__descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. In nemo commodi nulla maxime, neque similique sunt nisi unde recusandae nesciunt!</p>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">Categories</span>
        <ul className="sidebar__list">
          {categories.map((category) => (
            <li key={category._id} className="sidebar__list-item">
              <Link to={`/?category=${category.name}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__item">
        <div className="sidebar__title">Follow Us</div>
        <div className="sidebar__social">
          <i className="sidebar__icon fab fa-facebook-square"></i>
          <i className="sidebar__icon fab fa-twitter-square"></i>
          <i className="sidebar__icon fab fa-pinterest-square"></i>
          <i className="sidebar__icon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

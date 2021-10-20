import Sidebar from "../components/Sidebar"
import defaultImage from "../assets/images/paper-note.jpg"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import axios from "axios"

function Postpage() {
  const [post, setPost] = useState({})

  const PostId = useLocation().pathname.split("/")[2]

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get("/post/" + PostId)
      setPost(response.data)
    }
    fetchPost()
  }, [])

  const postImage = post.image ? post.image : defaultImage
  return (
    <div className="postpage">
      <div className="post">
        <div className="post__wrapper">
          <img src={postImage} alt="" className="post__image" />
          <h1 className="post__title">
            {post.title}
            <div className="post__actions">
              <i className="post__icon post__icon-edit bx bxs-message-square-edit"></i>
              <i className="post__icon post__icon-delete bx bxs-trash-alt"></i>
            </div>
          </h1>
          <div className="post__info">
            <span className="post__author">
              <i className="bx bxs-pen"></i> Author : <b>{post.username}</b>
            </span>
            <span className="post__date">
              {new Date(post.createdAt).toDateString()} <i className="bx bxs-calendar"></i>
            </span>
          </div>
          <p className="post__text">{post.description}</p>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}

export default Postpage

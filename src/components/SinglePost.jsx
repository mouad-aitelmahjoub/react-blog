import { Link } from "react-router-dom"
import defaultImage from "../assets/images/paper-note.jpg"

const SinglePost = ({ post }) => {
  const postImage = post.image ? post.image : defaultImage
  return (
    <div className="singlepost">
      <img src={postImage} className="singlepost__image" alt="" />
      <div className="singlepost__info">
        <div className="singlepost__categories">
          {post.categories.map((category, index) => (
            <span className="singlepost__categories-item">
              <i className="bx bxs-music"></i> {category.name}
            </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`}>
          <div className="singlepost__title">{post.title}</div>
        </Link>
        <hr />
        <span className="singlepost__date">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="singlepost__description">{post.description}</p>
    </div>
  )
}

export default SinglePost

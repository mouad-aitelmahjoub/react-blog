import Leafs from "../assets/images/leafs.jpg"

const SinglePost = () => {
  return (
    <div className="post">
      <img src={Leafs} className="post__image" alt="" />
      <div className="post__info">
        <div className="post__categories">
          <span className="post__categories-item">
            <i class="bx bxs-music"></i> Music
          </span>
          <span className="post__categories-item">
            <i class="bx bxs-happy-heart-eyes"></i> Life
          </span>
        </div>
        <div className="post__title">Lorem ipsum dolor sit.</div>
        <hr />
        <span className="post__date">1 hour ago</span>
      </div>
      <p className="post__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quia enim temporibus ea optio sapiente excepturi, maxime numquam praesentium nisi, modi dicta aliquid est quas, obcaecati veritatis deserunt hic vero?</p>
    </div>
  )
}

export default SinglePost

import Leafs from "../assets/images/leafs.jpg"

const SinglePost = () => {
  return (
    <div className="singlepost">
      <img src={Leafs} className="singlepost__image" alt="" />
      <div className="singlepost__info">
        <div className="singlepost__categories">
          <span className="singlepost__categories-item">
            <i className="bx bxs-music"></i> Music
          </span>
          <span className="singlepost__categories-item">
            <i className="bx bxs-happy-heart-eyes"></i> Life
          </span>
        </div>
        <div className="singlepost__title">Lorem ipsum dolor sit.</div>
        <hr />
        <span className="singlepost__date">1 hour ago</span>
      </div>
      <p className="singlepost__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quia enim temporibus ea optio sapiente excepturi, maxime numquam praesentium nisi, modi dicta aliquid est quas, obcaecati veritatis deserunt hic vero?</p>
    </div>
  )
}

export default SinglePost

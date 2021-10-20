import SinglePost from "./SinglePost"

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post, index) => (
        <SinglePost key={index} post={post} />
      ))}
    </div>
  )
}

export default Posts

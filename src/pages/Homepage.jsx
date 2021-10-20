import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Posts from "../components/Posts"
import Sidebar from "../components/Sidebar"

function Homepage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/post")
      setPosts(response.data)
    }
    fetchPosts()
  }, [])

  return (
    <>
      <Header />
      <div className="homepage">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  )
}

export default Homepage

import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import Header from "../components/Header"
import Posts from "../components/Posts"
import Sidebar from "../components/Sidebar"

function Homepage() {
  const [posts, setPosts] = useState([])
  const { search } = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/post" + search)
      setPosts(response.data)
    }
    fetchPosts()
  }, [search])

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

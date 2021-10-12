import Header from "../components/Header"
import Posts from "../components/Posts"
import Sidebar from "../components/Sidebar"

function Homepage() {
  return (
    <>
      <Header />
      <div className="homepage">
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}

export default Homepage

import Header from "../Header"
import Posts from "../Posts"
import Sidebar from "../Sidebar"

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

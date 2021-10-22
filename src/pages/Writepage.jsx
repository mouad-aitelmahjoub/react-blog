import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"
import leafs from "../assets/images/leafs.jpg"

function Writepage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const user = useSelector((state) => state.user)

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      username: user.username,
      title,
      description,
      image: "https://picsum.photos/480/720",
      categories: [category],
    }
    try {
      const response = await axios.post("/post", newPost)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="writepage">
      <img className="writepage__image" src={leafs} alt="cover" />
      <form className="writepage__form" onSubmit={handleFormSubmit}>
        <div className="writepage__formgroup">
          <select onChange={(e) => setCategory(e.target.value)} defaultValue="Life">
            <option value="music">Music</option>
            <option value="life">Life</option>
            <option value="sport">Sport</option>
            <option value="business">Business</option>
          </select>
        </div>
        <div className="writepage__formgroup">
          <input type="text" placeholder="Title" className="writepage__input" autoFocus={true} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="writepage__formgroup">
          <textarea placeholder="Tell Your story.." type="text" className=" writepage__input writepage__input-text" onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <button className="writepage__submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  )
}

export default Writepage

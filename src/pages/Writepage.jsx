import leafs from "../assets/images/leafs.jpg"

function Writepage() {
  return (
    <div className="writepage">
      <img className="writepage__image" src={leafs} alt="cover" />
      <form className="writepage__form">
        <div className="writepage__formgroup">
          <label htmlFor="fileInput">
            <i className="writepage__icon bx bxs-message-alt-add"></i>
          </label>
          <input type="file" name="fileInput" id="fileInput" style={{ display: "none" }} />
          <input type="text" placeholder="Title" className="writepage__input" autoFocus={true} />
        </div>
        <div className="writepage__formgroup">
          <textarea placeholder="Tell Your story.." type="text" className=" writepage__input writepage__input-text"></textarea>
        </div>
        <button className="writepage__submit">Publish</button>
      </form>
    </div>
  )
}

export default Writepage

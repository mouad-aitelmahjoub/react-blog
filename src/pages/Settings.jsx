import Sidebar from "../components/Sidebar"

function Settings() {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="settings__title">
          <span className="settings__title-update">Update Your Account</span>
          <span className="settings__title-delete">Delete Account</span>
        </div>
        <form className="settings__form">
          <label>Profile Picture</label>
          <div className="settings__picture">
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <label htmlFor="fileInput">
              <i className="settings__icon bx bxs-user-circle"></i>{" "}
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} className="settings__input" />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settings__submit" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings

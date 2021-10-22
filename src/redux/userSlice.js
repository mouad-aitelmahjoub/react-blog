import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: JSON.parse(localStorage.getItem("user")) || {},
  reducers: {
    login: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      console.log(state)
      return (state = action.payload.user)
    },
    logout: (state) => {
      localStorage.removeItem("user")
      console.log("You're now logged out!")
      return (state = {})
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer

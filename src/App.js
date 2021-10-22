import Topbar from "./components/Topbar"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import Homepage from "./pages/Homepage"
import Postpage from "./pages/Postpage"
import Writepage from "./pages/Writepage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useSelector } from "react-redux"

function App() {
  const user = useSelector((state) => state.user)
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/register">{user.username ? <Homepage /> : <Register />}</Route>
        <Route path="/login">{user.username ? <Homepage /> : <Login />}</Route>
        <Route path="/write">{user.username ? <Writepage /> : <Login />}</Route>
        <Route path="/settings">{user.username ? <Settings /> : <Login />}</Route>
        <Route path="/post/:postId">
          <Postpage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

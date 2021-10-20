import Topbar from "./components/Topbar"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import Homepage from "./pages/Homepage"
import Postpage from "./pages/Postpage"
import Writepage from "./pages/Writepage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const user = false
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/register">{user ? <Homepage /> : <Register />}</Route>
        <Route path="/login">{user ? <Homepage /> : <Login />}</Route>
        <Route path="/write">{user ? <Writepage /> : <Login />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Login />}</Route>
        <Route path="/post/:postId">
          <Postpage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import Home from "./page/Home"
import About from "./page/About"
import Content from "./page/Content"


export default function App() {
  return (
    <Router>
      <div>
        <p><Link to = "/Home">Home</Link></p>
        <p><Link to = "/Content">Content</Link></p>
        <p><Link to = "/About">About</Link></p>
      </div>
      
      <Switch>
        <Route path = "/Home">
          <Home/>
        </Route>
        <Route path = "/About">
          <About/>
        </Route>
        <Route path = "/Content">
          <Content/>
        </Route>
      </Switch>
    </Router>
  )
};
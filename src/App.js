import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Error404 from "./pages/404";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact />
        <Route path="/" component={Navigation} />
      </Switch>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;

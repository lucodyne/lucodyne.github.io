import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Sidenav from "./components/Sidenav";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidenav />
        <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <>
        <Header />
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
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;

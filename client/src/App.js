import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/About";
// import Header from "./components/Header";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
// import Sidenav from "./components/Sidenav";

import Sparkles from "./components/Sparkles";

import "./App.css";

class App extends Component {
  render() {
    return (
      // <Router>
      <>
        <Sparkles>
          {/* <Header /> */}
          {/* <Sidenav /> */}

          {/* <Switch> */}
          {/* <Route path="/projects"> */}
          {/* </Route> */}

          {/* <Route path="/"> */}
        </Sparkles>
        <About />
        <Projects />
        {/* </Route> */}
        {/* </Switch> */}
        <Contact />
      </>
      // </Router>
    );
  }
}

export default App;

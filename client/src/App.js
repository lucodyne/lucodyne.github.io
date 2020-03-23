import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/About";
// import Header from "./components/Header";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
// import Sidenav from "./components/Sidenav";

class App extends Component {
  render() {
    return (
      <>
        {/* <Header />

        <Sidenav /> */}

        <About />

        <Projects />

        <Contact />
      </>
    );
  }
}

export default App;

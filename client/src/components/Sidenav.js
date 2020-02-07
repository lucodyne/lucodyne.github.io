import React, { Component } from "react";

class Sidenav extends Component {
  render() {
    return (
      <ul id="sidenav" className="sidenav grey lighten-1">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    );
  }
}
export default Sidenav;

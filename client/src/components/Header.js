import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="cyan nav-wrapper">
          <div className="container">
            <a href="#" data-target="sidenav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <div className="brand-logo">Sean Lim</div>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/projects">Portfolio</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;

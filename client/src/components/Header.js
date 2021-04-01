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
            <ul className="right hide-on-med-and-down">
              <li>
                <a className="grey-text text-darken-4" href="/">
                  About
                </a>
              </li>
              <li>
                <a className="grey-text text-darken-4" href="/projects">
                  Portfolio
                </a>
              </li>
              {/* <li>
                <a className="grey-text text-darken-4" href="/contact">
                  Contact
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;

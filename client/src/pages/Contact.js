import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <footer className="row" id="footer">
        <div className="col m0 l2"></div>
        <div className="card col s12 m12 l8 center grey darken-1">
          <ul>
            <li>
              email:{" "}
              <a
                className="cyan-text text-lighten-2 color-text"
                href="mailto:lim_s@outlook.com"
              >
                lim_s@outlook.com
              </a>
            </li>
            <li>
              github:{" "}
              <a
                className="cyan-text text-lighten-2 color-text"
                href="https://github.com/lucodyne"
              >
                github.com/lucodyne
              </a>
            </li>
            <li>
              linkedin:{" "}
              <a
                className="cyan-text text-lighten-2 color-text"
                href="https://www.linkedin.com/in/sean-lim-8126ab1a0/"
              >
                www.linkedin.com/in/sean-lim-8126ab1a0/
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
export default Contact;

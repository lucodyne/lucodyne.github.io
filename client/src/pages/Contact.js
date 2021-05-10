import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="row">
        <div className="col m0 l2"></div>
        <div className="card col m12 l8 center blue-grey lighten-3 grey-text text-darken-4">
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
      </div>
    );
  }
}
export default Contact;

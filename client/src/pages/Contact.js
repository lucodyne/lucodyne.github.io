import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s1 m2"></div>
        <div className="card col s10 m8 center grey darken-1">
          <ul>
            <li>
              email:{" "}
              <a
                className="cyan-text text-lighten-2"
                href="mailto:hi.im.sean.lim@gmail.com"
                style={{ "text-shadow": "1px 1px #000000" }}
              >
                hi.im.sean.lim@gmail.com
              </a>
            </li>
            <li>
              github:{" "}
              <a
                className="cyan-text text-lighten-2"
                href="https://github.com/lucodyne"
                style={{ "text-shadow": "1px 1px #000000" }}
              >
                github.com/lucodyne
              </a>
            </li>
            <li>
              linkedin:{" "}
              <a
                className="cyan-text text-lighten-2"
                href="https://www.linkedin.com/in/sean-lim-8126ab1a0/"
                style={{ "text-shadow": "1px 1px #000000" }}
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

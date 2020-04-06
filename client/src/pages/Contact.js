import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s1 m2"></div>
        <div className="card col s10 m8 center grey darken-1">
          {/* <h3>Contact</h3> */}

          <ul>
            <li>
              email:{" "}
              <a
                className="cyan-text text-lighten-2 hoverable"
                href="mailto:hi.im.sean.lim@gmail.com"
              >
                hi.im.sean.lim@gmail.com
              </a>
            </li>
            <li>
              github:{" "}
              <a
                className="cyan-text text-lighten-2 hoverable"
                href="https://github.com/lucodyne"
              >
                github.com/lucodyne
              </a>
            </li>
            <li>
              linkedin:{" "}
              <a
                className="cyan-text text-lighten-2 hoverable"
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

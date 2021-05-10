import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <>
        <div className="col s12 m6 l6" style={{ padding: 0 }}>
          <div className="col s0 m1 l1"></div>
          <div className="card cyan lighten-2 col s12 m10 l9 ">
            <div className="card-image hoverable waves-effect waves-block waves-light z-depth-2">
              <img
                alt={this.props.name}
                className="activator"
                src={this.props.image}
              ></img>
            </div>
            <div className="card-content flow-text">
              <span className="center card-title activator">
                {this.props.name}
                <i class="material-icons right">more_vert</i>
              </span>
            </div>
            <div className="card-reveal blue-grey lighten-3 cyan-text text-lighten-2">
              <span className="card-title center grey-text text-darken-4 flow-text">
                {this.props.name}
                <i class="material-icons right">close</i>
              </span>
              <p
                className="flow-text"
                style={{ "text-shadow": "1px 1px #000000" }}
              >
                {this.props.description}
              </p>
              <br></br>
              <p className="grey-text text-darken-4">
                made with: {this.props.tools}
              </p>
            </div>
            <div
              className="card-action center"
              style={{ "text-shadow": "1px 1px #000000" }}
            >
              <a className="grey-text text-darken-4 left" href={this.props.url}>
                link
              </a>
              <a
                className="grey-text text-darken-4 right"
                href={this.props.github}
              >
                github
              </a>
              <br />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Project;

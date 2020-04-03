import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <>
        <div className="col s12 m6 l6">
          <div className="col s0 m1 l1"></div>
          <div className="card hoverable grey darken-1 col s12 m10 l9 ">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={this.props.image}></img>
            </div>
            <div className="card-content flow-text">
              <span className="center card-title activator">
                {this.props.name}
                <i class="material-icons right">more_vert</i>
              </span>
            </div>
            <div className="card-reveal grey darken-1 cyan-text text-lighten-2">
              <span className="card-title center grey-text text-darken-4 flow-text">
                {this.props.name}
                <i class="material-icons right">close</i>
              </span>
              <p>{this.props.description}</p>
              <br></br>
              <p className="grey-text text-darken-4">
                tools used: {this.props.tools}
              </p>
              {/* <p>role: {this.props.position}</p> */}
            </div>
            <div className="card-action">
              <a className="cyan-text text-lighten-2" href={this.props.url}>
                link
              </a>
              |{"       "}
              <a className="cyan-text text-lighten-2" href={this.props.github}>
                github
              </a>
            </div>
          </div>
          {/* <div className="col s0 m1"></div> */}
        </div>
      </>
    );
  }
}
export default Project;

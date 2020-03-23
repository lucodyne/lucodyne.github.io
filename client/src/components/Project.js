import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <>
        <div className="card col s6 m3 l3">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={this.props.image}></img>
          </div>
          <div className="card-content flow-text">
            <span className="center card-title activator">
              {this.props.name}
              <i class="material-icons right">more_vert</i>
            </span>
          </div>
          <div className="card-reveal">
            <span className="card-title center flow-text">
              {this.props.name}
              <i class="material-icons right">close</i>
            </span>
            <p>{this.props.description}</p>
            <p>tools used: {this.props.tools}</p>
            <p>role: {this.props.position}</p>
          </div>
          <div className="card-action">
            <a href={this.props.url}>go</a>
          </div>
        </div>
      </>
    );
  }
}
export default Project;

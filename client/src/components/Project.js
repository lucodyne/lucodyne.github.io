import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <div className="card hoverable left col s6 m4 l3">
        <div className="card-image">
          <img src={this.props.image}></img>
          <span className="card-title">{this.props.name}</span>
        </div>
        <div className="card-content">
          <p>{this.props.description}</p>
        </div>
        <div className="card-action">
          <a href={this.props.url}>go</a>
        </div>
      </div>
    );
  }
}
export default Project;

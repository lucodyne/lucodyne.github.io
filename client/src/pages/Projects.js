import React, { Component } from "react";
import Project from "../components/Project.js";

const projects = require("../projects.json");

class Projects extends Component {
  render() {
    return (
      <div className="container row">
        <h4 className="center grey-text text-lighten-2">projects</h4>
        {Object.keys(projects).map(key => {
          return (
            <Project
              name={key}
              key={key}
              url={projects[key].url}
              description={projects[key].description}
              image={projects[key].image}
              tools={projects[key].tools}
              position={projects[key].position}
            ></Project>
          );
        })}
      </div>
    );
  }
}
export default Projects;

import React from "react";
import movieSearcher from "../assets/movie-searcher.png";
import budgeting from "../assets/budgeting-app.png";
import kanban from "../assets/kanban.png";
import styled from "styled-components";
import Project from "./Project";

const projects = [
  { title: "Kan Ban", image: kanban },
  { title: "Movie Searcher", image: movieSearcher },
  { title: "Budget App", image: budgeting },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="text-center">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

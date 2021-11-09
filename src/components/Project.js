import React from "react";
import styled from "styled-components";

const ProjectComponent = styled.article`
  position: relative;
  width: 95%;
  min-height: 180px;
  border: 1px solid white;
  margin: 1rem auto;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    ${({ image }) => `url(${image})`} no-repeat center center/cover;

  .overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 0;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover .overlay {
    height: 100%;
  }
`;

function Project({ project }) {
  return (
    <ProjectComponent image={project.image}>
      <div className="overlay">
        <button className="btn">Visit project</button>
      </div>
    </ProjectComponent>
  );
}

export default Project;

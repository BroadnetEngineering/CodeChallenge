import React from 'react';
import './ProjectContainer.css';
import { Container, Typography } from '@material-ui/core';
import Project from '../Project/Project';

const ProjectContainer = (props) => {

  let currentProjects = props.projects.map(project => {
    return (
      <Project
        key={project.id}
        id={project.id}
        title={project.title}
        deleteProject={props.deleteProject}
        edit={project.edit}
        editProject={props.editProject}
        inputNewTitle={props.inputNewTitle}
      />
  )})

  return (
    <Container maxWidth='lg' id="projectContainer">
      <Typography>
        Current Projects:
      </Typography>

      {currentProjects}
    </Container>
  )
}

export default ProjectContainer;
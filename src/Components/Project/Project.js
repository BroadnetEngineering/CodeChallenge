import React from 'react';
import './Project.css';
import { Container, Typography, Button, Tooltip } from '@material-ui/core';
import Edit from '../Edit/Edit';

const Project = (props) => {
  return (
    <Container maxWidth='lg' className="project" key={props.id}>
      <Tooltip title="Edit Name" arrow>
        <Typography
          variant="subtitle1"
          display="inline"
          onClick={() => props.editProject(props.id)}>
          {props.title}
        </Typography>
      </Tooltip>
      {props.edit ? <Edit id={props.id} inputNewTitle={props.inputNewTitle}/> : null}
      <Tooltip title="Delete Project" arrow>
        <Button 
          id="deleteBtn"
          onClick={() => props.deleteProject(props.id)}>
            X
        </Button>
      </Tooltip>
    </Container>
  )
}

export default Project;
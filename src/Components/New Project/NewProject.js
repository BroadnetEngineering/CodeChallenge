import React, { Component } from 'react';
import './NewProject.css';
import { Container, Input, Typography, Tooltip, Button } from '@material-ui/core';

class NewProject extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      title: "",
      urgent: false,
      complette: false,
      subtasks: [],
      edit: false,
    }
  }

  inputTitle = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }

  inputProject = () => {
    this.setState({ id : Date.now() })
    this.props.addNewProject(this.state)
    this.setState({ title : '' })
  }

  render() {
    return (
      <Container maxWidth="lg" id="new_project">
        <Typography>Add a new project:</Typography>
        <Input
          placeholder="Title"
          name="title"
          type="text"
          value={this.state.title}
          onChange={e => this.inputTitle(e)}
        />
        <Tooltip title="Add Project!" arrow>
          <Button
            id="inputProjectBtn" 
            variant="contained" 
            color="primary"
            onClick={() => this.inputProject()}>
            +
          </Button>
        </Tooltip>
      </Container>
    );
  }
}

export default NewProject;
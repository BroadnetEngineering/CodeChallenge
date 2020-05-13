import React, { Component } from 'react';
import './Edit.css';
import { Container, Typography, Input, Tooltip, Button } from '@material-ui/core';

class Edit extends Component {
  constructor() {
    super();
    this.state = {
      updateTitle : '',
      updateId: 0,
    }
  }

  editTitle = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    this.setState({ updateId: this.props.id});
  }

  render() {
    return (
      <Container maxWidth="lg" id="add_new_project">
        <Typography>Change project title:</Typography>
        <Input
          placeholder="new Title"
          name="updateTitle"
          type="text"
          value={this.state.title}
          onChange={e => this.editTitle(e)}
        />
        <Tooltip title="Change Title" arrow>
          <Button
            id="inputProjectBtn" 
            variant="contained" 
            color="primary"
            onClick={() => this.props.inputNewTitle(this.state.updateId, this.state.updateTitle)}>
            Update title
          </Button>
        </Tooltip>
      </Container>
    )
  }
}

export default Edit;
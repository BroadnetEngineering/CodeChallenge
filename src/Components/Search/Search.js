import React, { Component } from 'react';
import './Search.css';
import { Container, Input, Tooltip } from '@material-ui/core'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    }
  }

  inputSearch = (e) => {
    this.setState({ [e.target.name] : e.target.value });
    this.props.updateSearch(e.target.value);
  }

  render() {
    return (
      <Container maxwidth='xs'>
        <Tooltip title="Sort Projects" arrow>
          <Input
            placeholder="Search"
            name="search"
            type="text"
            value={this.state.search}
            onChange={(e) => this.inputSearch(e)}
          />
        </Tooltip>
      </Container>
    )
  }
}

export default Search;
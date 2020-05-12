import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import NewProject from '../New Project/NewProject';
import { Container } from '@material-ui/core';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    }
  }

  render () {
    return (
      <Container>
        <Header />
        <Search />
        <NewProject />
      </Container>
    )
  }
}

export default App;
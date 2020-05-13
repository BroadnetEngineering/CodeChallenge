import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import NewProject from '../New Project/NewProject';
import ProjectContainer from '../Project Container/ProjectContainer';
import { Container } from '@material-ui/core';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      filteredProjects: [],
    }
  }

  addNewProject = (project) => {
    let newProjects = [...this.state.projects];
    if (project.title !== '') {
      newProjects.push(project);
      this.setState({ projects : newProjects})
    }
  }

  deleteProject = (id) => {
    let currentProjects = [...this.state.projects];
    currentProjects.forEach((project, index) => {
      if (project.id === id){
        currentProjects.splice(index, 1)
      }
    });
    this.setState({ projects : currentProjects });
  }

  editProject = (id) => {
    let currentProjects = [...this.state.projects];
    currentProjects.find(project => project.id === id).edit = true;
    this.setState({ filteredProjects: currentProjects });
  }

  inputNewTitle = (id, newTitle) => {
    if (!newTitle) {
      return
    }
    let projects = [...this.state.projects];
    let updatedProject = projects.find(project => project.id === id);
    updatedProject.title = newTitle;
    updatedProject.edit = false;
    this.setState({ projects: projects });
  }

  updateSearch = (query) => {
    let currentProjects = [...this.state.projects]
    let sortedProjects = [];
    currentProjects.forEach(project => {
      if (project.title.includes(query)){
        sortedProjects.unshift(project)
      } else {
        sortedProjects.push(project)
      }
    })
    this.setState({ projects: sortedProjects })
  }

  render () {
    return (
      <Container id="App">
        <Header 
          updateSearch={this.updateSearch}
        />
        <NewProject addNewProject={this.addNewProject}/>
        <ProjectContainer 
          projects={this.state.projects}
          deleteProject={this.deleteProject}
          editProject={this.editProject}
          inputNewTitle={this.inputNewTitle}
        />
      </Container>
    )
  }
}

export default App;
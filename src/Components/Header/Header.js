import React from 'react';
import './Header.css';
import { Typography, Container } from '@material-ui/core';
import Search from '../Search/Search';

const Header = (props) => {

  return (
    <Container maxWidth="lg" id="header">
      <Typography 
        variant="h2" 
        id="page_title"
        display="inline">
        Todo it!
      </Typography>
      <Search 
        class="search_box"
        updateSearch={props.updateSearch}/>
    </Container>
  )
}

export default Header;

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';

export default class Menubar extends Component {
  render() {
    return (
      <div className="info-text">
        <span>Search by</span>
        <Button bsSize="small" className="search-by-title">Title</Button>
        <Button bsSize="small" className="search-by-genre">Genre</Button>
        <Button className="search">Search</Button>
      </div>        
    );
  }
}

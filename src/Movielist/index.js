import React, { Component } from 'react';
import { Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import classNames from 'classnames';

import MovieItem from './MovieItem';

import './movielist.style.less';

const rouletteDetails = classNames({
    'show-grid': true,
    'rouletteDetails': true
});

class Movielist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }  

  render() {
    if (!this.state.isLoading && this.props.movieList) {
      const movieList = this.props.movieList;
      const movieItems = movieList.map((movie) =>
        <MovieItem moviedata={movie} key={movie.id} />
      );

      return (      
        <Row className={rouletteDetails}>
          <Col md={12}>
            <Row className="option-bar">
              <Navbar>
                <Navbar.Header>
                  <Navbar.Brand>
                    {movieList.length} movie{movieList.length > 1 && 's'} found
                  </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                  <NavItem onClick={() => this.props.sortByReleaseDate(movieList)}>
                    release date
                  </NavItem>
                  <NavItem onClick={() => this.props.sortByRating(movieList)}>
                    rating
                  </NavItem>
                </Nav>
                <Navbar.Text pullRight>Sort by:</Navbar.Text>
              </Navbar>
            </Row>
            <Row>
              <Col md={9} mdOffset={1}>
                <Row>
                  {movieItems}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      );
    } else {
      return true
    }
  }
}

export default Movielist;

import React, { Component } from 'react';
import { connect } from "react-redux";

import { Header } from "./Header/";
import { Footer } from "./Footer/";
import Movielist from "./Movielist/";

import {
  serverRequest,
  searchRequest,
  sortByReleaseDate,
  sortByRating
} from "./actions/movieActions";

import './App.style.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {},
      isLoading: true
    };
  }

  UNSAFE_componentWillMount() {
    //call it with random sort - just for fun
    /*const sortTypes = ["rating", "release%20date"];
    const sortIndex = Math.floor(Math.random() * (sortTypes.length));
    const sortBy = sortTypes[sortIndex];*/

    this.setState({      
      movies: this.props.serverRequest(9)
    });    
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    const movieList = this.props.movies.movies.data;
    return (
      this.state.isLoading ? (
        <div className="container">
          <Header />
          Loading
          <Footer />
        </div>) : (
        <div className="container">
          <Header />
          <Movielist
            movieList={movieList}
            sortByReleaseDate={() => this.props.sortByReleaseDate(movieList)}
            sortByRating={() => this.props.sortByRating(movieList)}
          />
          <Footer />
        </div>)
    );
  }
}

const mapStateToProps = (state) => {
  return {
      movies: state.movies
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        serverRequest: (limit) => {
            dispatch(serverRequest(limit));
        },
        searchRequest: (phrase, filter) => {
            dispatch(searchRequest(phrase, filter));
        },
        sortRequest: (sortBy) => {
            dispatch(sortRequest(sortBy));
        },
        sortByReleaseDate: (list) => {
            dispatch(sortByReleaseDate(list));
        },
        sortByRating: (list) => {
            dispatch(sortByRating(list));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

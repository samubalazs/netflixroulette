import React, { Component } from 'react';
import { Row, Col, Image, Badge } from 'react-bootstrap';

const truncate = (string, limit) =>
  string.length <= limit ? string : `${string.substr(0, limit)}...`;

const listGenres = (genres, limit) =>
  genres.length <= limit ? genres.join(', ') : `${genres.slice(0, limit).join(', ')}...`;

const releaseDate = (date) =>
  date.split('-')[0];

class MovieItem extends Component {
  constructor(props) {
    super(props);
  }  

  render() {
    const movieDetails = this.props.moviedata;

    return (
      <Col md={4} key={movieDetails.id} className="single-movie">     
        <Image src={movieDetails.poster_path} responsive thumbnail />
        <div className="title">{truncate(movieDetails.title, 30)}</div>
        <Badge pullRight>
          {releaseDate(movieDetails.release_date)}
        </Badge>
        <div className="genres">{listGenres(movieDetails.genres, 3)}</div>
      </Col>
    );
  }
}

export default MovieItem;

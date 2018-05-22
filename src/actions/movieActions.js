import axios from 'axios';

export function serverRequest(limit) {
  return dispatch => {
    axios.get('http://react-cdp-api.herokuapp.com/movies?sortBy=release_date&sortOrder=asc&limit=' + limit)
      .then(function(result) {
        dispatch({
          type: "READ_DATA",
          payload: result.data
        });
      })
  }
}

export function searchRequest(phrase, filter) {
  return dispatch => {
    axios.get('http://react-cdp-api.herokuapp.com/movies?search=' + phrase + '&searchBy=' + filter + '&limit=9')
      .then(function(result) {
        dispatch({
          type: "SEARCH_DATA",
          payload: result.data
        });
      })
  }
}

/*export function sortRequest(sortBy) {
  return dispatch => {
    axios.get('http://react-cdp-api.herokuapp.com/movies?sortBy=' + sortBy + '&limit=9')
      .then(function(result) {
        dispatch({
          type: "SORT_DATA",
          payload: result.data
        });
      })
  }
}*/

export function sortByReleaseDate(list) {
  return dispatch => {
    const result = {
      data: list.sort((a, b) => (new Date(b.release_date) - new Date(a.release_date)))
    }
    dispatch({
      type: "SORT_DATA_BY_RELEASEDATE",
      payload: result
    });
  };
}

export function sortByRating(list) {
  return dispatch => {
    const result = {
      data: list.sort((a, b) => b.vote_average - a.vote_average)
    }
    dispatch({
      type: "SORT_DATA_BY_RATING",
      payload: result
    });
  };
}

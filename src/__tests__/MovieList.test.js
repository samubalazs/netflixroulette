import React from 'react';
import renderer from 'react-test-renderer';
import Movielist from '../Movielist/';

describe('Checking the list of the Movies', () => {
	const dummyMovies = [
	  {
	    "id": 1,
	    "title": "Snatch",
	    "tagline": "string",
	    "vote_average": 0,
	    "vote_count": 0,
	    "release_date": "string",
	    "poster_path": "string",
	    "overview": "string",
	    "budget": 0,
	    "revenue": 0,
	    "runtime": 0,
	    "genres": [
	      "string"
	    ]
	  },
	  {
	    "id": 2,
	    "title": "Desperado",
	    "tagline": "string",
	    "vote_average": 0,
	    "vote_count": 0,
	    "release_date": "string",
	    "poster_path": "string",
	    "overview": "string",
	    "budget": 0,
	    "revenue": 0,
	    "runtime": 0,
	    "genres": [
	      "string"
	    ]
	  }
	];

  it('should render the component correctly', () => {
    const rendered = renderer.create(
      <Movielist movieList={dummyMovies} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

	test('displayed order of the movies should be set by releaseday', () => {
		const sortByReleaseDate = jest.fn();
		const wrapper = mount(
			<Movielist movieList={dummyMovies} sortByReleaseDate={sortByReleaseDate} />
		);

		const link = wrapper.find('li a').at(0);
		link.simulate('click');
		expect(sortByReleaseDate).toHaveBeenCalled();
	});

	test('displayed order of the movies should be set by rating', () => {
		const sortByRating = jest.fn();
		const wrapper = mount(
			<Movielist movieList={dummyMovies} sortByRating={sortByRating} />
		);

		const link = wrapper.find('li a').at(1);
		link.simulate('click');
		expect(sortByRating).toHaveBeenCalled();
	});
})

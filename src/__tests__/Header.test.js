import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from '../Header/';
import { Searchbar } from '../Header/Searchbar';

describe('Header component rendered correctly', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <Header />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  /*it('should handle the change in search input field', () => {
  	const startState = {
		  value: 'test text added to the search input'
		};
		const finState = handleChange(startState);
    expect(finState.value).toEqual('test text added to the search input');
  });*/
  
});

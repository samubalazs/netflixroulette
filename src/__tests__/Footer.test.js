import React from 'react';
import renderer from 'react-test-renderer';
import { Footer } from '../Footer/';

describe('Footer component rendered correctly', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <Footer />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

import { truncate, listGenres, releaseDate } from '../Movielist/MovieItem';

describe('test functions on movie item', () => {
  it('should shorten the added text to limit', () => {
    expect(truncate('this text has over thirty characters in it', 30)).toMatchSnapshot();
  });

  it('should shorten the added genres list to limit', () => {
    expect(listGenres(['this', 'array', 'contains', 'more', 'items'], 3)).toMatchSnapshot();
  });

  it('should display the year only from the given date', () => {
    expect(releaseDate('2018-05-22')).toMatch(/2018/);
  });
})

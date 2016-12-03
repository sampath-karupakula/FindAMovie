import { FindAMoviePage } from './app.po';

describe('find-amovie App', function() {
  let page: FindAMoviePage;

  beforeEach(() => {
    page = new FindAMoviePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

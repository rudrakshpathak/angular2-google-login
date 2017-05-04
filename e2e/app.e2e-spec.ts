import { GooglePage } from './app.po';

describe('google App', function() {
  let page: GooglePage;

  beforeEach(() => {
    page = new GooglePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

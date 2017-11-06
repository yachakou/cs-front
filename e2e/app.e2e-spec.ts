import { AmarisDemoPage } from './app.po';

describe('amaris-demo App', function() {
  let page: AmarisDemoPage;

  beforeEach(() => {
    page = new AmarisDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

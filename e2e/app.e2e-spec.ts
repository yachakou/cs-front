import { CSFPage } from './app.po';

describe('CSFPage App', function() {
  let page: CSFPage;

  beforeEach(() => {
    page = new CSFPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

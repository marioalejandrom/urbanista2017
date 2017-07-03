import { UrbanistaAppPage } from './app.po';

describe('urbanista-app App', function() {
  let page: UrbanistaAppPage;

  beforeEach(() => {
    page = new UrbanistaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

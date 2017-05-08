import { SigmaNuWebPage } from './app.po';

describe('sigma-nu-web App', () => {
  let page: SigmaNuWebPage;

  beforeEach(() => {
    page = new SigmaNuWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

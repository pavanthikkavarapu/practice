import { NoticeBoardPage } from './app.po';

describe('notice-board App', () => {
  let page: NoticeBoardPage;

  beforeEach(() => {
    page = new NoticeBoardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

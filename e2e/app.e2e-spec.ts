import { NgAdvancePage } from './app.po';

describe('ng-advance App', () => {
  let page: NgAdvancePage;

  beforeEach(() => {
    page = new NgAdvancePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

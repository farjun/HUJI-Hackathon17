import { HUJIHackathon17Page } from './app.po';

describe('huji-hackathon17 App', function() {
  let page: HUJIHackathon17Page;

  beforeEach(() => {
    page = new HUJIHackathon17Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

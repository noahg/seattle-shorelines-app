import { SeattleShorelinesAppPage } from './app.po';

describe('seattle-shorelines-app App', () => {
  let page: SeattleShorelinesAppPage;

  beforeEach(() => {
    page = new SeattleShorelinesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

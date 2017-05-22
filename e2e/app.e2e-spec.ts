import { GraphchartPage } from './app.po';

describe('graphchart App', () => {
  let page: GraphchartPage;

  beforeEach(() => {
    page = new GraphchartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

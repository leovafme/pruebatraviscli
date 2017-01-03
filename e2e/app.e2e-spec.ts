import { PruebatraviscliPage } from './app.po';

describe('pruebatraviscli App', function() {
  let page: PruebatraviscliPage;

  beforeEach(() => {
    page = new PruebatraviscliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

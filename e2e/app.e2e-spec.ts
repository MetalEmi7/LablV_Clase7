import { Clase7Page } from './app.po';

describe('clase7 App', () => {
  let page: Clase7Page;

  beforeEach(() => {
    page = new Clase7Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

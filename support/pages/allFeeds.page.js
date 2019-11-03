import Page from './page';

class AllFeeds extends Page {
  constructor() {
    super();
    this.title = 'Architect';
    this.url = '/qainterviewtwo/service-periods';
  }

  open () {
    super.open(this.url);
  }

  verifyPage () {
    const url = browser.getUrl();
    expect(url).to.contain(this.url);
  }
}

export default new AllFeeds();

import Page from './page';

class AllFeeds extends Page {
  constructor() {
    super();
    this.title = 'Architect';
    // Obviously, `qainterviewtwo` would need to be dynamic, but since I don't have full permissions, I'll hard-code for now.
    this.url = '/qainterviewtwo/service-periods';
    // We gotta talk about some of these selectors, y'all.
    this.elements = {
      newFeedButton: 'a[title="New Feed"]',
      uploadFeed: '[data-id="visualization"] button',
      userNavProfile: '[data-id="user-nav-profile"]'
    };
  }

  open () {
    super.open(this.url);
  }

  createNewFeed () {
    const button = $(this.elements.newFeedButton);
    button.click();
  }

  verifyPage () {
    const profile = $(this.elements.userNavProfile);
    profile.waitForDisplayed();

    const url = browser.getUrl();
    expect(url).to.contain(this.url);
  }
}

export default new AllFeeds();

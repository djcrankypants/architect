export default class Page {
  open (path) {
    browser.url(path);
  }

// I noticed Pendo was installed on your test env. Here is how you disable/enable guides so that they don't impact tests *unless* you're testing guides. :)
  startPendoGuides () {
    return browser.execute(function () {
        window.pendo.setGuidesDisabled(false);
        window.pendo.startGuides();
    });
}

  stopPendoGuides () {
    return browser.execute(function () {
        window.pendo.setGuidesDisabled(true);
        window.pendo.stopGuides();
    });
}
}

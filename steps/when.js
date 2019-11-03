import { When } from 'cucumber';
import AllFeeds from '../support/pages/allFeeds.page';
import Login from '../support/pages/login.page';
import NewFeed from '../support/pages/newFeed.page';

When(
  /^I submit a valid username with a valid password$/i, function () {
    Login.submitCredentials(process.env.testUser, process.env.testPwd);
  }
);

When(
  /^I submit the username ([^"]*) with the password ([^"]*)$/i, function (username, password) {
    Login.submitCredentials(username, password);
  }
);

When(
  /^I click "New Feed"$/i, function () {
    AllFeeds.createNewFeed
  }
);

When(
  /^I update the ([^"]*) to "([^"]*)"$/i, function (field, value) {
    NewFeed.enterInput(field, value);
  }
);

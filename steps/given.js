
import { Given } from 'cucumber';
import AllFeeds from '../support/pages/allFeeds.page';
import Login from '../support/pages/login.page';

Given(
  /^I am on the login page$/i,
  Login.open
);

Given(
  /^I have logged in$/i, function () {
    Login.submitCredentials(process.env.testUser, process.env.testPwd);
  }
);

Given(
  /^I am on the All Feeds page$/i, function () {
    AllFeeds.verifyPage();
  }
);

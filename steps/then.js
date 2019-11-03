import { Then } from 'cucumber';
import AllFeeds from '../support/pages/allFeeds.page';
import Login from '../support/pages/login.page';

Then(/^I am redirected to the All Feeds view$/i, function () {
  AllFeeds.verifyPage;
});

Then(/^I see the message "([^"]*)"$/i, function (msg) {
  Login.verifyErrorMsg(msg);
});

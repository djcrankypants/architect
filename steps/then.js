import { Then } from 'cucumber';
import AllFeeds from '../support/pages/allFeeds.page';

Then(/^I am redirected to the All Feeds view$/i, function () {
  AllFeeds.verifyPage;
});


import { Given } from 'cucumber';
import AllFeeds from '../support/pages/allFeeds.page';
import Login from '../support/pages/login.page';

Given(
  /^I am on the login page$/i,
  Login.open
);

Given(
  /^I have logged in$/i, function () {
    Login.open
    browser.setCookies({name: 'transloc_authn_cookie',value: 'eyJ1c2VybmFtZSI6InFhX3VzZXJfMDIiLCJzaGliIjp7fSwiaXNfc3VwZXIiOmZhbHNlfQ.EKBuxg.ngx26ucqbCJtmjHP_4VRP6IhYEE'});
    $('#app').waitForExist(5000);
    // Login.userInput.setValue(this.testUser);
    // Login.passwordInput.setValue(this.testPwd);
  }
);

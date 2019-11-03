import { When } from 'cucumber';
import Login from '../support/pages/login.page';

When(
  /^I submit a valid username with a valid password$/i, function () {
    Login.userInput.setValue(this.testUser);
    Login.passwordInput.setValue(this.testPwd);
    Login.submitButton.click();
  }
);

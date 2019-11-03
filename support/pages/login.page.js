import Page from './page';

class Login extends Page {
  constructor () {
    super();
    this.title = 'Log in';
    this.url = "https://login.stage.transloc.com/login/?next=https://architect.stage.transloc.com/";
    this.elements = {
      alert: '.login-container > .alert.alert-warning',
      forgotPassword : '.signup-text',
      passwordInput : '#password',
      signupButton : '.btn[href="register"]',
      submitButton : '.btn[type="submit"]',
      userInput : '#username'
    }
  }

  enterUsername (username) {
    const input = $(this.elements.userInput);
    return input.setValue(username);
  }

  enterPassword (password) {
    const input = $(this.elements.passwordInput);
    return input.setValue(password);
  }

  submitCredentials (username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    $(this.elements.submitButton).click();
  }

  open () {
    super.open(process.env.loginUrl);
  }

  verifyErrorMsg (msg) {
    const alert = $(this.elements.alert);
    alert.waitForExist();
    const text = alert.getText();
    expect(text).to.equal(msg);
  }
}

export default new Login();

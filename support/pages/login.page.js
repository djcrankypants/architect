import Page from './page';

class Login extends Page {
  constructor () {
    super();
    this.title = 'Log in';
    this.url = "https://login.stage.transloc.com/login/?next=https://architect.stage.transloc.com/";
  }

  get forgotPassword () { return $('.signup-text'); }

  get passwordInput () { return $('#password'); }

  get signupButton () { return $('.btn[href="register"]') }

  get submitButton () { return $('.btn[type="submit"]'); }

  get userInput () { return $('#username'); }

  open () {
    super.open('https://login.stage.transloc.com/login/?next=https://architect.stage.transloc.com/');
  }
}

export default new Login();

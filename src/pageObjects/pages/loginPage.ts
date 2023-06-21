import { BasePage } from './basePage';

class LoginPage extends BasePage {
  constructor() {
    super('https://rbgeshop.org/account/login', 'Account – The Botanics Shop at Royal Botanic Garden Edinburgh');
  }

  get emailInput() {
    return cy.get('#CustomerEmail');
  }

  get passwordInput() {
    return cy.get('#CustomerPassword');
  }

  get signInButton() {
    return cy.get('#customer_login>button');
  }

  get errorMessageElement() {
    return cy.get('.errors > ul > li');
  }

  fillInLoginForm(email: string, password: string) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
  }
}

export default new LoginPage();

import { BasePage } from './basePage';

class AccountPage extends BasePage {
  constructor() {
    super('https://rbgeshop.org/account', 'Account – The Botanics Shop at Royal Botanic Garden Edinburgh');
  }

  get accountDetailsSection() {
    return cy.get('.customer div:nth-child(2) > div:nth-child(2) > p');
  }
}

export default new AccountPage();

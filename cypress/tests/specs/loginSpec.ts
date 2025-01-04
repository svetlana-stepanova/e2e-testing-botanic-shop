import { accountPage, loginPage } from '../../pageObjects/pages/index';
import { loginData } from '../testData/loginData';
import { statusMessage } from '../testData/statusMessage';

describe('Login page', function () {
  beforeEach(function () {
    loginPage.open();
  });

  it('Should login with valid credentials', function () {
    loginPage.fillInLoginForm(loginData.email, loginData.password);
    loginPage.signInButton.click();

    cy.url().should('eq', accountPage.url);
    accountPage.accountDetailsSection.should('contain', loginData.userName);
  });

  it(`Shouldn't login with invalid credentials,see the message:${statusMessage.incorrectEmailOrPassword}`, function () {
    loginPage.fillInLoginForm(loginData.emailInvalid, loginData.passwordInvalid);
    loginPage.signInButton.click();

    loginPage.errorMessageElement.should('be.visible').should('contain.text', statusMessage.incorrectEmailOrPassword);
  });
});

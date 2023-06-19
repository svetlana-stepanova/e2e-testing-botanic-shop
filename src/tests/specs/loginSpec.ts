import accountPage from '../../pageObjects/pages/accountPage';
import loginPage from '../../pageObjects/pages/loginPage';
import { loginData } from '../testData/loginData';

describe('Login page', function () {
  it('Should login with valid credentials', function () {
    loginPage.open();
    loginPage.fillInLoginForm(loginData.email, loginData.password);
    loginPage.signInButton.click();

    cy.url().should('eq', accountPage.url);
    accountPage.accountDetailsSection.should('contain', loginData.userName);
  });
});

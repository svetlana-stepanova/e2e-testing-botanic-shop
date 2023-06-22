import cartPage from '../../pageObjects/pages/cartPage';
import homePage from '../../pageObjects/pages/homePage';
import productCollectionPage from '../../pageObjects/pages/productCollectionPage';
import productPage from '../../pageObjects/pages/productPage';
import searchPage from '../../pageObjects/pages/searchPage';
import { CategoryName, SubcategoryName } from '../testData/category,subcategoryName';
import { Product } from '../testData/productOptions';
import { FilterByAvailabilityOptions } from '../testData/sort,filterProductOptions';
import { Wait } from '../testData/waitOptions';

describe('Cart', function () {
  beforeEach(function () {
    homePage.open();
  });

  it('Should find product through the search, add to the cart from product page', function () {
    homePage.header.searchButton.click();
    homePage.searchModalWindowComponent.findProduct(Product.Book);
    searchPage.firstProductOfResults.click();
    productPage.addToCartButton.click();

    productPage.cartNotificationModalWindow.rootElement.should('be.visible');

    productPage.cartNotificationModalWindow.viewMyCartButton.click();

    cy.url().should('eq', cartPage.url);
    cartPage.cartItemsTable.should('be.visible');
  });

  it('Should add product to the cart from product collection page', function () {
    homePage.header.categoryButton(CategoryName.Home).click();
    homePage.header.getSubcategory(SubcategoryName.Stationery).click();
    productCollectionPage.addToCartButtons.first().click();

    productCollectionPage.cartNotificationModalWindow.rootElement.should('be.visible');

    productCollectionPage.cartNotificationModalWindow.viewMyCartButton.click();

    cy.url().should('eq', cartPage.url);
    cartPage.cartItemsTable.should('be.visible');
  });

  it('Should not be possible to add product to the cart with availability status "out of stock"', function () {
    homePage.header.categoryButton(CategoryName.Home).click();
    homePage.header.getSubcategory(SubcategoryName.Stationery).click();
    productCollectionPage.facetFilter.filterByAvailabilityButton.click();
    productCollectionPage.facetFilter
      .filterByAvailabilityCheckbox(FilterByAvailabilityOptions.OutOfStock)
      .click({ force: true })
      .wait(Wait.Minim);

    productCollectionPage.addToCartButtons.first().should('be.disabled');
  });
});

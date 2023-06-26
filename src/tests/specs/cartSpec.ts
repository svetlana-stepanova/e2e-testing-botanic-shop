import cartPage from '../../pageObjects/pages/cartPage';
import homePage from '../../pageObjects/pages/homePage';
import productCollectionPage from '../../pageObjects/pages/productCollectionPage';
import productPage from '../../pageObjects/pages/productPage';
import searchPage from '../../pageObjects/pages/searchPage';
import { CategoryName, SubcategoryName } from '../testData/category,subcategoryName';
import { Product, quantity } from '../testData/productOptions';
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

  it('Should add to the cart two products and display the correct sum in subtotal field', function () {
    homePage.header.searchButton.click();
    homePage.searchModalWindowComponent.findProduct(Product.Book);
    searchPage.firstProductOfResults.click();
    productPage.addToCartButton.click();
    homePage.header.searchButton.click();
    homePage.searchModalWindowComponent.findProduct(Product.Pot);
    searchPage.firstProductOfResults.click();
    productPage.addToCartButton.click();
    productPage.cartNotificationModalWindow.viewMyCartButton.click();

    cartPage.priceElements.should('have.length', 2);
    cartPage.validateSumPricesInCart();
  });

  it('Should remove product from the cart', function () {
    homePage.header.searchButton.click();
    homePage.searchModalWindowComponent.findProduct(Product.Book);
    searchPage.firstProductOfResults.click();
    productPage.addToCartButton.click();
    productPage.cartNotificationModalWindow.viewMyCartButton.click();

    cartPage.cartItemsTable.should('be.visible');

    cartPage.removeButtons.first().click().wait(Wait.Minim);

    cartPage.cartItemsTable.should('not.exist');
    cartPage.emptyCartText.should('be.visible');
  });

  it(`Should set the number of product in the cart ${quantity[2]} and display correct total`, function () {
    homePage.header.searchButton.click();
    homePage.searchModalWindowComponent.findProduct(Product.Book);
    searchPage.firstProductOfResults.click();
    productPage.addToCartButton.click();
    productPage.cartNotificationModalWindow.viewMyCartButton.click();

    cartPage.validateTotalChangesWithQuantity(quantity[2]);
  });

  it(`Should set the number of product in the cart ${quantity[0]} and remove it`, function () {
    homePage.header.searchButton.click();
    homePage.searchModalWindowComponent.findProduct(Product.Book);
    searchPage.firstProductOfResults.click();
    productPage.addToCartButton.click();
    productPage.cartNotificationModalWindow.viewMyCartButton.click();
    cartPage.quantityInputs.clear();
    cartPage.quantityInputs.type(quantity[0]);

    cartPage.cartItemsTable.should('not.exist');
    cartPage.emptyCartText.should('be.visible');
  });
});

import homePage from '../../pageObjects/pages/homePage';
import productCollectionPage from '../../pageObjects/pages/productCollectionPage';
import { CategoryName, SubcategoryName } from '../testData/category,subcategoryName';
import { price } from '../testData/productOptions';
import { statusMessage } from '../testData/statusMessage';
import { Wait } from '../testData/waitOptions';

describe('Filter product collection', function () {
  beforeEach(function () {
    homePage.open();
    homePage.header.categoryButton(CategoryName.Book).click();
    homePage.header.getSubcategory(SubcategoryName.BotanicsBooks).click();
  });

  it(`Should filter and display products by price from ${price[0]} to ${price[30]}`, function () {
    productCollectionPage.facetFilter.filterByPriceButton.click();
    productCollectionPage.facetFilter.filterByPriceFromInput.type(`${price[0]}`).wait(Wait.Minim);
    productCollectionPage.facetFilter.filterByPriceToInput.type(`${price[30]}`).wait(Wait.Minim);

    productCollectionPage.validateProductsFilteredByPrice(price[0], price[30]);
  });

  it(`Should display '${statusMessage.noProducts}' when filter by price from ${price[0]} to ${price[0]}`, function () {
    productCollectionPage.facetFilter.filterByPriceButton.click();
    productCollectionPage.facetFilter.filterByPriceFromInput.type(`${price[0]}`).wait(Wait.Minim);
    productCollectionPage.facetFilter.filterByPriceToInput.type(`${price[0]}`).wait(Wait.Minim);

    productCollectionPage.emptyCollectionMessageElement.should('contain.text', statusMessage.noProducts);
  });
});

import homePage from '../../pageObjects/pages/homePage';
import searchPage from '../../pageObjects/pages/searchPage';
import { Product } from '../testData/productNames';
import { statusMessage } from '../testData/statusMessage';

describe('Search', function () {
  beforeEach(function () {
    homePage.open();
  });

  it(`Should find an existing product '${Product.Seed}' through the search modal window`, function () {
    homePage.header.searchButton.click();
    homePage.searchModalWindowComponent.findProduct(Product.Seed);

    searchPage.validateFirstRowSearchResults(Product.Seed);
  });

  it(`Should not find a product '${Product.Iphone}' through the search modal window`, function () {
    homePage.header.searchButton.click();
    homePage.searchModalWindowComponent.findProduct(Product.Iphone);

    searchPage.noResultFoundElement.should('contain', statusMessage.noResults(Product.Iphone));
  });

  it(`Should open search page via footer and find a product '${Product.Pot}'`, function () {
    homePage.footer.searchPageLink.click();
    searchPage.findProduct(Product.Pot);

    searchPage.validateFirstRowSearchResults(Product.Pot);
  });

  it('Should remove the previous product from the search bar and find a new one', function () {
    homePage.footer.searchPageLink.click();
    searchPage.findProduct(Product.Pot);
    searchPage.clearSearchTermButton.click();
    searchPage.findProduct(Product.Pendant);

    searchPage.validateFirstRowSearchResults(Product.Pendant);
    searchPage.searchInput.should('have.value', Product.Pendant);
  });
});

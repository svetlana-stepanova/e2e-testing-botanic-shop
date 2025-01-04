import { Product } from './productOptions';

export const statusMessage = {
  noResults(product: Product) {
    return `No results found for “${product}”.`;
  },
  get noProducts() {
    return 'No products found';
  },
  get incorrectEmailOrPassword() {
    return 'Incorrect email or password.';
  },
};

import { BasePage } from './basePage';

class HomePage extends BasePage {
  constructor() {
    super('/', 'Online Shop for the Royal Botanic Garden Edinburgh');
  }
}

export default new HomePage();

import { FooterComponent } from '../components/common/footerComponent';
import { HeaderComponent } from '../components/common/headerComponent';
import { SearchModalWindowComponent } from '../components/common/searchModalWindowComponent';

export abstract class BasePage {
  header = new HeaderComponent();
  footer = new FooterComponent();
  searchModalWindowComponent = new SearchModalWindowComponent();

  constructor(public url: string, public title: string) {
    this.url = url;
    this.title = title;
  }

  open() {
    return cy.visit(this.url);
  }
}

import { BaseComponent } from '../baseComponent';

export class FooterComponent extends BaseComponent {
  constructor() {
    super('footer.footer');
  }

  get searchPageLink() {
    return this.rootElement.find('a[href="/search"]');
  }
}

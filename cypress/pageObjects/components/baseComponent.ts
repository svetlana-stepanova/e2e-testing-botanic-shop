export abstract class BaseComponent {
  constructor(public rootSelector: string) {
    this.rootSelector = rootSelector;
  }

  get rootElement() {
    return cy.get(this.rootSelector);
  }
}

import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .toolbar span')).getText() as Promise<string>;
  }

  getItemLabels(): ElementArrayFinder {
    return element.all(by.css('.todo-label'));
  }

  getFirstItemLabel(): ElementFinder {
    return this.getItemLabels().get(0);
  }

  getTodoInput(): ElementFinder {
    return element(by.css('.todo-input'));
  }

  getTodoRemoves(): ElementArrayFinder {
    return element.all(by.css('.todo-remove'));
  }

  getFirstTodoRemove(): ElementFinder {
    return this.getTodoRemoves().get(0);
  }

  getTodoCheckboxes(): ElementArrayFinder {
    return element.all(by.css('.todo-checkbox'));
  }

  getFirstTodoCheckbox(): ElementFinder {
    return this.getTodoCheckboxes().get(0);
  }

  getRemoveCompletedButton(): ElementFinder {
    return element(by.css('.action-remove-completed'));
  }

  getEditInput(): ElementFinder {
    return element(by.css('.todo-edit'));
  }

  isEditInputPresent(): promise.Promise<boolean> {
    return this.getEditInput().isPresent();
  }
  
}

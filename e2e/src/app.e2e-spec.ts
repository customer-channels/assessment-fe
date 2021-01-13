import { AppPage } from './app.po';
import { browser, logging, element, by, protractor } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to ista!');
  });

  it('should render initial items', () => {
    const list = page.getItemLabels();
    expect(list.get(0).getText()).toBe('Code Todo App');
    expect(list.get(1).getText()).toBe('Submit Task');
    expect(list.get(2).getText()).toBe('Get Response');
  });

  it('should type in an todo and add todo item', () => {
    const input = page.getTodoInput();
    input.sendKeys('new item');
    expect(input.getAttribute('value')).toEqual('new item');
    input.sendKeys(protractor.Key.ENTER);
    expect(input.getAttribute('value')).toEqual('');

    const list = page.getItemLabels();
    expect(list.last().getText()).toBe('new item');
  });

  it('should remove item', () => {
    const removeButton = page.getFirstTodoRemove();
    removeButton.click();
    page.getItemLabels().then(function(labels) {
      expect(labels.length).toBe(3);
      expect(labels[0].getText()).toBe('Submit Task');
    });
  });

  it('should check item', () => {
    const checkbox = page.getFirstTodoCheckbox();
    checkbox.click();
    expect(page.getFirstItemLabel().getAttribute('class')).toContain("completed");
  });

  it('should remove completed items', () => {
    const removeCompletedButton = page.getRemoveCompletedButton();
    removeCompletedButton.click();
    page.getItemLabels().then(function(labels) {
      expect(labels.length).toBe(2);
      expect(labels[0].getText()).toBe('Get Response');
      expect(labels[1].getText()).toBe('new item');
    });
  });

  it('should edit item', () => {
    const label = page.getFirstItemLabel();
    browser.actions().doubleClick(label).perform();
    const editInput = page.getEditInput();
    expect( page.isEditInputPresent()).toBeTruthy();

    editInput.sendKeys(' edited');
    editInput.sendKeys(protractor.Key.ENTER);
    expect( page.isEditInputPresent()).toBeFalsy();
    expect(label.getText()).toBe('Get Response edited');
  });

  it('should not change edited item on esc button', () => {
    const label = page.getFirstItemLabel();
    browser.actions().doubleClick(label).perform();
    const editInput = page.getEditInput();
    expect( page.isEditInputPresent()).toBeTruthy();

    editInput.sendKeys('again');
    editInput.sendKeys(protractor.Key.ESCAPE);
    expect( page.isEditInputPresent()).toBeFalsy();
    expect(label.getText()).toBe('Get Response edited');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});

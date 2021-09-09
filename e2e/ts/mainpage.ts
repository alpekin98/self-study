import {
  browser,
  element,
  by,
  ElementFinder,
  ElementArrayFinder,
} from 'protractor';

export class Mainpage {
  stationNameInput: ElementFinder = element(by.name('stationName'));
  stationLocationSelect: ElementArrayFinder = element.all(by.tagName('option'));
  stationStatusCheckbox: ElementFinder = element(by.name('stationStatus'));
  addButton: ElementFinder = element(by.name('addButton'));
  deleteButton: ElementArrayFinder = element.all(by.name('deleteButton'));
  stationTableRows: ElementArrayFinder = element
    .all(by.css('tbody'))
    .all(by.css('tr'));

  getUrl = (url: string) => {
    browser.get(url);
  };

  setName = (name: string) => {
    this.stationNameInput.sendKeys(name);
  };

  setLocation = async (city: string) => {
    let length = await this.stationLocationSelect.count();
    let optionList = await this.stationLocationSelect;
    let optionValid = false;
    for (let i = 0; i < length; i++) {
      if ((await optionList[i].getAttribute('value')) == city) {
        optionList[i].click();
        optionValid = true;
      }
    }
    expect(optionValid).toBe(true);
  };

  setStatus = () => {
    this.stationStatusCheckbox.click();
  };

  clickAddButton = () => {
    this.addButton.click();
  };

  getAddButton = () => {
    return this.addButton;
  };

  async getStationCount() {
    return await this.stationTableRows.count();
  }

  getStationFromTable = (index: number) => {
    return this.stationTableRows.get(index).all(by.css('td'));
  };

  clickDeleteButton = async (index: number) => {
    await this.deleteButton.get(index).click();
  };
}

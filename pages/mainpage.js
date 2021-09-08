let mainpage = function () {
  let stationNameInput = element(by.name("stationName"));
  let stationLocationSelect = element.all(by.tagName("option"));
  let stationStatusCheckbox = element(by.name("stationStatus"));
  let addButton = element(by.name("addButton"));
  let deleteButton = element.all(by.name("deleteButton"));
  let stationTableRows = element.all(by.css("tbody")).all(by.css("tr"));

  this.getUrl = (url) => {
    browser.get(url);
  };

  this.setName = (name) => {
    stationNameInput.sendKeys(name);
  };

  this.setLocation = async (city) => {
    let length = await stationLocationSelect.count();
    let optionList = await stationLocationSelect;
    let optionValid = false;
    for (let i = 0; i < length; i++) {
      if ((await optionList[i].getAttribute("value")) == city) {
        optionList[i].click();
        optionValid = true;
      }
    }
    expect(optionValid).toBe(true);
  };

  this.setStatus = () => {
    stationStatusCheckbox.click();
  };

  this.clickAddButton = () => {
    addButton.click();
  };

  this.getAddButton = () => {
    return addButton;
  };

  this.getStationCount = async () => {
    let stations = stationTableRows;
    return await stations.count();
  };

  this.getStationFromTable = (index) => {
    return stationTableRows.get(index).all(by.css("td"));
  };

  this.clickDeleteButton = async (index) => {
    await deleteButton.get(index).click();
  };
};

module.exports = new mainpage();

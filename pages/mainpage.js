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

  this.setLocation = (index) => {
    stationLocationSelect.then(function (options) {
      options[index].click();
    });
  };

  this.setStatus = (status) => {
    if (status) {
      stationStatusCheckbox.click();
    }
  };

  this.clickAddButton = () => {
    addButton.click();
  };

  this.getStationCount = async () => {
    let stations = stationTableRows;
    return await stations.count();
  };

  this.getStationFromTable = (index) => {
    return stationTableRows.get(index).all(by.css("td"));
  };

  this.clickDeleteButton = () => {
    deleteButton.click();
  };
};

module.exports = new mainpage();

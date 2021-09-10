let homepage = require("./mainpage");

describe("Kulak Project Mainpage Test", () => {
  var localUrl = "http://localhost:4200/";

  it("List length after add", async () => {
    homepage.getUrl(localUrl);
    homepage.setName("Ankara Base Station 10");
    homepage.setLocation("Ankara");
    homepage.setStatus();
    homepage.clickAddButton();
    expect(homepage.getStationCount()).toBe(1);
    browser.executeScript("localStorage.removeItem('stationList');");
  });

  it("Check data after add", async () => {
    let name = "Ankara Base Station 10";
    let status = true;
    homepage.getUrl(localUrl);
    homepage.setName(name);
    homepage.setLocation("Ankara");
    homepage.setStatus();
    homepage.clickAddButton();
    expect(homepage.getStationCount()).toBe(1);

    let stationData = homepage.getStationFromTable(0);
    let stationIndex = await stationData.get(0).getText();
    let stationName = await stationData.get(1).getText();
    let stationStatus =
      (await stationData
        .get(3)
        .element(by.css("button"))
        .getAttribute("class")) == "btn btn-success"
        ? true
        : false;
    expect(stationStatus).toBe(status);
    expect(stationIndex).toBe("1");
    expect(stationName).toBe(name);

    browser.executeScript("localStorage.removeItem('stationList');");
  });

  it("Checks station quantity", () => {
    homepage.getUrl(localUrl);
    let length = 10;
    let i = 0;
    for (i = 0; i < length; i++) {
      homepage.setName("Istanbul Base Station #" + i);
      homepage.setLocation("Ankara");
      homepage.setStatus();
      homepage.clickAddButton();
    }
    expect(homepage.getStationCount()).toBe(length);
    for (i = 0; i < length; i++) {
      homepage.clickDeleteButton(0);
      expect(homepage.getStationCount()).toBe(length - i - 1);
    }
  });

  it("Checks if form button enabled", () => {
    homepage.getUrl(localUrl);
    homepage.setName("İstanbul Base Station 42");
    homepage.setLocation("Ankara");
    homepage.setStatus();
    expect(homepage.getAddButton().isEnabled()).toBe(true);
  });

  it("Checks if form button disabled", () => {
    homepage.getUrl(localUrl);
    expect(homepage.getAddButton().isEnabled()).toBe(false);
  });
});

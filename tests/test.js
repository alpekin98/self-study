let homepage = require("../pages/mainpage");

describe("Kulak Project Mainpage Test", () => {
  it("List length after add", async () => {
    homepage.getUrl("http://localhost:4200/");
    homepage.setName("DENEME1");
    homepage.setLocation(0);
    homepage.setStatus(true);
    homepage.clickAddButton();
    expect(homepage.getStationCount()).toBe(1);
    browser.executeScript("localStorage.removeItem('stationList');");
  });

  it("Check data after add", async () => {
    let name = "DENEME1";
    let status = true;
    homepage.getUrl("http://localhost:4200/");
    homepage.setName(name);
    homepage.setLocation(0);
    homepage.setStatus(status);
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
});

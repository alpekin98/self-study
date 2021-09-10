var HtmlScreenshotReporter = require("protractor-jasmine2-screenshot-reporter");

var reporter = new HtmlScreenshotReporter({
  dest: "screenshots",
  filename: "my-report.html",
});

// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      binary: process.env.CHROME_BIN,
      args: ["--no-sandbox"],
    },
  },

  // Framework to use. Jasmine is recommended.
  framework: "jasmine",

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ["e2e/js/test.js"],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },

  beforeLaunch: function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function () {
    jasmine.getEnv().addReporter(reporter);
    let AllureReporter = require("jasmine-allure-reporter");
    jasmine.getEnv().addReporter(
      new AllureReporter({
        resultsDir: "allure-results",
      })
    );
    var jasmineReporters = require("jasmine-reporters");
    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: "./other-reports",
        filePrefix: "xmlresults",
      })
    );

    var fs = require("fs-extra");
    fs.emptyDir("screenshots/", function (err) {
      console.log(err);
    });

    jasmine.getEnv().addReporter({
      specDone: function (result) {
        if (result.status == "failed") {
          browser.getCapabilities().then(function (caps) {
            var browserName = caps.get("browserName");
            browser.takeScreenshot().then(function (png) {
              var stream = fs.createWriteStream(
                "screenshots/" + browserName + "-" + result.fullName + ".png"
              );
              stream.write(new Buffer(png, "base64"));
              stream.end();
            });
          });
        }
      },
    });
  },

  // Close the report after all tests finish
  afterLaunch: function (exitCode) {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },

  onComplete: function () {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get("browserName");
      browserVersion = caps.get("version");
      platform = caps.get("platform");

      var HTMLReport = require("protractor-html-reporter-2");

      testConfig = {
        reportTitle: "Protractor Test Execution Report",
        outputPath: "./other-reports",
        outputFilename: "ProtractorTestReport",
        screenshotPath: "./screenshots",
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        testPlatform: platform,
      };
      new HTMLReport().from("./other-reports/xmlresults.xml", testConfig);
    });
  },
};

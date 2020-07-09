const path = require("path");
const reporter = require("cucumber-html-reporter");

const reporterOptions = {
  theme: "bootstrap",
  jsonFile: path.join(__dirname, '../../reports/report.json'),
    output: path.join(__dirname, '../../reports/cucumber_report.html'),
  reportSuiteAsScenarios: true,
  launchReport: true,
};

exports.config = {
  allScriptsTimeout: 20000,
  getPageTimeout: 20000,
  specs: [path.resolve("./test/features/*.feature")],
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  capabilities: {
    browserName: "chrome",
  },
  disableChecks: true,
  //seleniumAddress: "http://localhost:4444/wd/hub",
  directConnect: true,
  cucumberOpts: {
    require: [path.resolve("./test/step_definitions/**/*.js")],
    format: ["json:./reports/report.json", "./node_modules/cucumber-pretty"],
    ignoreUncaughtExceptions: true,
  },
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
  },
  afterLaunch: () => {
    return reporter.generate(reporterOptions);
  },
};

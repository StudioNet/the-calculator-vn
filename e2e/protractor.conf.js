/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: ["./src/features/**/*.feature"],
  capabilities: {
    browserName: "chrome"
  },

  directConnect: true,
  baseUrl: "http://localhost:4200/",
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: ["summary", `json:./reports/summary.json`],
    require: ["./src/suits/**/*.steps.ts"],
    strict: true,
    tags: "@demo"
  },

  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.json")
    });
  },

  onComplete() {
    var reportBuilder = require("cucumber-html-reporter");
    let options = {
      theme: "hierarchy",
      jsonFile: "./reports/summary.json",
      output: "./reports/summary-view.html",
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        "App Version": "1.0",
        "Test Environment": "Development",
        Browser: "Chrome",
        Platform: "Windows 10",
        Parallel: "Scenarios",
        Executed: "Remote"
      }
    };
    reportBuilder.generate(options);
  }
};

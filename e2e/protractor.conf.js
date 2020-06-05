/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    "./src/features/example.feature",
    "./src/features/header/header.feature",
    "./src/features/header/mode-list.feature"
  ],
  capabilities: {
    browserName: "chrome",
    shardTestFiles: true
  },

  directConnect: true,
  baseUrl: "http://localhost:4200/",
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: ["summary", `json:./reports/summary.json`],
    require: [
      "./src/suits/example.steps.ts",
      "./src/suits/header/header.steps.ts",
      "./src/suits/header/mode-list.steps.ts"
    ],
    strict: true
    // tags: "@modelist" //["@demo", "@header", "@modelist"]
  },

  // plugins: [
  //   {
  //     package: "protractor-multiple-cucumber-html-reporter-plugin",
  //     options: {
  //       // read the options part
  //       jsonOutputPath: "./reports",
  //       reportPath: "./reports",
  //       openReportInBrowser: true,
  //       saveCollectedJSON: false,
  //       automaticallyGenerateReport: false
  //     }
  //   }
  // ],

  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.json")
    });
  },

  onComplete() {
    console.log("Build report now");
    // var reportBuilder = require("cucumber-html-reporter");
    // let options = {
    //   theme: "bootstrap",
    //   jsonDir: "./reports",
    //   // jsonFile: "./reports/summary.json",
    //   output: "./reports/summary-view.html",
    //   reportSuiteAsScenarios: true,
    //   launchReport: true,
    //   ignoreBadJsonFile: true,
    //   metadata: {
    //     "App Version": "1.0",
    //     "Test Environment": "Development",
    //     Browser: "Chrome",
    //     Platform: "Windows 10",
    //     Parallel: "Scenarios",
    //     Executed: "Remote"
    //   }
    // };
    // reportBuilder.generate(options);
  }
};

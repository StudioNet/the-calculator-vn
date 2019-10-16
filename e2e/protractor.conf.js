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
    format: "summary",
    require: ["./src/suits/**/*.steps.ts"],
    strict: true,
    tags: "@demo"
  },

  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.json")
    });
  }
};

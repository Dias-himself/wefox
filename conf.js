// An example configuration file.
exports.config = {
  chromeOnly: true,
  directConnect: true,
  onPrepare: async function (params) {
    await browser.waitForAngularEnabled(false);
  },

  SELENIUM_PROMISE_MANAGER: false,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['exercise3.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 50000
  }
};

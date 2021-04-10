const { Builder } = require('selenium-webdriver');
// Options are optional, in default instance are not needed. (remove if needed)
const { Options } = require('selenium-webdriver/firefox');
const options = new Options().setBinary(
  'C:\\Program Files\\Mozilla Firefox\\firefox.exe'
);

const buildDriver = (browserType) => {
  switch (browserType) {
    case 'firefox':
      return new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .build();
    case 'chrome':
      return new Builder().forBrowser('chrome').build();
    default:
      console.log(
        `browser ${browserType} is invalid, launching chrome as default browser`
      );
      return new Builder().forBrowser('chrome').build();
  }
};

module.exports = { buildDriver };

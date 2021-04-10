const fake = require('../utils/fake_data');

class BasePage {
  constructor(driver) {
    this.driver = driver;
    this.fake = fake;
  }
  async goToUrl(url) {
    await this.driver.manage().window().maximize();
    await this.driver.manage().setTimeouts({ implicit: 30000 });
    await this.driver.get(url);
  }

  async clickElement(locator) {
    await this.driver.findElement(locator).click();
  }
  async jsClickElement(locator) {
    await this.driver.executeScript(
      `document.querySelector('${locator}').click();`
    );
  }
  async sendKeys(locator, txt, key = '') {
    await this.driver.findElement(locator).sendKeys(txt, key);
  }
  async scrollIntoView(locator) {
    await this.driver.executeScript(`
        document.querySelector('${locator}').scrollIntoView();
    `);
  }
}

module.exports = BasePage;

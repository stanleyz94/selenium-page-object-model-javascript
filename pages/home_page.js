const { until } = require('selenium-webdriver');
const BasePage = require('./base_page');

const { signInButton, registrationButton } = require('../utils/locators');

class HomePage extends BasePage {
  constructor(driver) {
    super(driver);
  }
  async goToUserPage() {
    await this.driver.wait(until.elementLocated(signInButton), 50000).click();
  }
  async goToRegistrationPage() {
    await this.driver
      .wait(until.elementLocated(registrationButton), 50000)
      .click();
  }
}

module.exports = HomePage;

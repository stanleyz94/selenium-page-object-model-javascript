const { By, Key, until } = require('selenium-webdriver');
const BasePage = require('./base_page');

const locator = require('../utils/locators');

class RegistrationPage extends BasePage {
  constructor(driver) {
    super(driver);
  }
  async fillName(txt) {
    await this.sendKeys(locator.nameInput, txt);
  }
  async fillSurname(txt) {
    await this.sendKeys(locator.surnameInput, txt);
  }
  async chooseGender(gender) {
    if (gender === 'female')
      return await this.jsClickElement(locator.genderFemaleBtn);
    if (gender === 'male')
      return await this.jsClickElement(locator.genderMaleBtn);
  }
  async fillCountryCode(txt) {
    await this.jsClickElement(locator.countryCodeDiv);
    await this.sendKeys(locator.countryCodeInput, txt, Key.RETURN);
  }
  async fillPhoneNumber(txt) {
    await this.sendKeys(locator.phoneNumberInput, txt);
  }
  async fillEmail(txt) {
    await this.sendKeys(locator.emailInput, txt);
  }
  async fillPassword(txt) {
    await this.sendKeys(locator.passwordInput, txt);
  }
  async chooseNationality(chCountry) {
    await this.clickElement(locator.nationalityInput);
    const countriesLabels = await this.driver.findElements(
      locator.countryLabels
    );
    for (let countriesLabel of countriesLabels) {
      const country = await countriesLabel.findElement(By.css('strong'));
      const countryInnerText = await country.getAttribute('innerText');
      const choosenCountry = chCountry;

      await this.driver.executeScript(
        `
        var label = document.querySelectorAll(
          'div.register-form__country-container__locations > label'
        );
        
        label.forEach((item, index) => {
          if (label[index].innerHTML.indexOf('${choosenCountry}') !== -1) {
            item.scrollIntoView({ block: 'nearest', inline: 'start' });
          }
        });
        
        `
      );
      if (countryInnerText == choosenCountry) {
        await country.click();
        break;
      }
    }
  }

  async checkNewsletterCheckbox() {
    await this.jsClickElement(locator.newsletterCheckbox);
  }
  async checkPrivacyPolicyCheckbox() {
    await this.jsClickElement(locator.privacyPolicyCheckbox);
  }
  async checkWizzAccountPolicyCheckbox() {
    await this.jsClickElement(locator.wizzAccountPolicyCheckbox);
  }
  async clickRegisterButton() {
    await this.scrollIntoView(locator.registerButton);
    await this.jsClickElement(locator.registerButton);
  }

  async verifyVisibleErrors(numberOfErrors, textErrors) {
    await this.driver.sleep(12000);
    const inputtedErrorMessages = [];
    textErrors.forEach((textError) => {
      inputtedErrorMessages.push(textError.replace(/\s/g, ''));
    });

    const visibleErrorMessages = [];
    const inputErrors = await this.driver.findElements(
      locator.inputErrorContainer
    );
    for (let inputError of inputErrors) {
      const elementStyle = await inputError.getAttribute('style');
      const isVisible = elementStyle != 'display: none;';
      const elementTextContent = await inputError.getAttribute('textContent');

      if (isVisible) {
        visibleErrorMessages.push(elementTextContent.replace(/\s/g, ''));
      }
    }
    //Checks whether the number of visible errors is correct.
    expect(visibleErrorMessages).toHaveLength(numberOfErrors);
    //Compares visible errors with errors entered by the user
    expect(visibleErrorMessages).toIncludeSameMembers(inputtedErrorMessages);
  }

  async verifySuccessfulRegistration() {
    const registrationForm = await this.driver.findElement(
      locator.registrationForm
    );
    const isFormRemoved = await this.driver.wait(
      until.stalenessOf(registrationForm)
    );

    if (isFormRemoved) {
      const isRegisteredAccountDisplayed = await this.driver
        .findElement(locator.registeredAccountLink)
        .isDisplayed();
      //Checks whether registered account is visible (whether value is 'true')
      expect(isRegisteredAccountDisplayed).toBeTruthy();
    }
  }
}

module.exports = RegistrationPage;

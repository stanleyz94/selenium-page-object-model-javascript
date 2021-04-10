const { By } = require('selenium-webdriver');

module.exports = {
  signInButton: By.css('button[data-test="navigation-menu-signin"]'),
  registrationButton: By.css('button[data-test="registration"]'),
  //Registration Page Locators
  registrationForm: By.css('article[data-test="registration-form-modal"]'),
  registeredAccountLink: By.css(
    'div.header__inner > div > nav > ul > li:nth-child(6) > a'
  ),
  nameInput: By.name('firstName'),
  surnameInput: By.name('lastName'),
  genderFemaleBtn: 'label[for="register-gender-female"]',
  genderMaleBtn: 'label[for="register-gender-male"]',
  countryCodeDiv:
    'div.phone-number__calling-code-selector__fake-input > div > div',
  countryCodeInput: By.name('phone-number-country-code'),
  phoneNumberInput: By.name('phoneNumberValidDigits'),
  emailInput: By.name('email'),
  passwordInput: By.name('password'),
  nationalityInput: By.css('input[data-test="booking-register-country"]'),
  countryLabels: By.xpath(
    '//div[@class="register-form__country-container__locations"]/label'
  ),
  newsletterCheckbox: 'div:nth-child(11) > div > label',
  privacyPolicyCheckbox: 'div:nth-child(12) > div > label',
  wizzAccountPolicyCheckbox: 'div:nth-child(13) > div > label',
  registerButton: 'div.cta-container.gutter-bottom > button',
  cancelButton: By.css('div:nth-child(15) > button'),
  inputErrorContainer: By.css('div.input-error'),
};

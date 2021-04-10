const HomePage = require('../pages/home_page');
const RegistrationPage = require('../pages/registration_page');
const { buildDriver } = require('../utils/drivers');

const driver = buildDriver('chrome');

const baseUrl = 'https://wizzair.com/pl-pl#/';

const invalidFirstname = '2q222';
const invalidSurname = '553412';
const invalidEmail = 'ljkdfdf.pl';
const invalidPhoneNumber = 'weqweq';
const invalidPassword = '123456';

describe('Registration Page Test', () => {
  jest.setTimeout(70000);

  beforeAll(async () => {
    const hp = new HomePage(driver);
    await hp.goToUrl(baseUrl);
    await hp.goToUserPage();
    await hp.goToRegistrationPage();
  });

  test.skip('Testing scenario with incorrect first name', async () => {
    const rp = new RegistrationPage(driver);

    await rp.fillName(invalidFirstname);
    await rp.fillSurname(rp.fake().secondName);
    await rp.chooseGender('female');
    await rp.fillCountryCode(rp.fake().countryCode);
    await rp.fillPhoneNumber(rp.fake().phoneNumber);
    await rp.fillEmail(rp.fake().email);
    await rp.fillPassword(rp.fake().password);
    await rp.chooseNationality('Australia');
    await rp.checkNewsletterCheckbox();
    await rp.checkPrivacyPolicyCheckbox();
    await rp.checkWizzAccountPolicyCheckbox();
    await rp.clickRegisterButton();
    await rp.verifyVisibleErrors(1, ['Nieprawidłowy znak']);
  });

  test.skip('Testing scenario with incorrect last name', async () => {
    const rp = new RegistrationPage(driver);

    await rp.fillName(rp.fake().firstName);
    await rp.fillSurname(invalidSurname);
    await rp.chooseGender('female');
    await rp.fillCountryCode(rp.fake().countryCode);
    await rp.fillPhoneNumber(rp.fake().phoneNumber);
    await rp.fillEmail(rp.fake().email);
    await rp.fillPassword(rp.fake().password);
    await rp.chooseNationality('Australia');
    await rp.checkNewsletterCheckbox();
    await rp.checkPrivacyPolicyCheckbox();
    await rp.checkWizzAccountPolicyCheckbox();
    await rp.clickRegisterButton();
    await rp.verifyVisibleErrors(1, ['Nieprawidłowy znak']);
  });

  test.skip('Testing scenario without choosing any gender', async () => {
    const rp = new RegistrationPage(driver);

    await rp.fillName(rp.fake().firstName);
    await rp.fillSurname(rp.fake().secondName);
    await rp.fillCountryCode(rp.fake().countryCode);
    await rp.fillPhoneNumber(rp.fake().phoneNumber);
    await rp.fillEmail(rp.fake().email);
    await rp.fillPassword(rp.fake().password);
    await rp.chooseNationality('Australia');
    await rp.checkNewsletterCheckbox();
    await rp.checkPrivacyPolicyCheckbox();
    await rp.checkWizzAccountPolicyCheckbox();
    await rp.clickRegisterButton();
    await rp.verifyVisibleErrors(1, ['Wybierz']);
  });

  test.skip('Testing scenario with incorrect phone number', async () => {
    const rp = new RegistrationPage(driver);

    await rp.fillName(rp.fake().firstName);
    await rp.fillSurname(rp.fake().secondName);
    await rp.chooseGender('female');
    await rp.fillCountryCode(rp.fake().countryCode);
    await rp.fillPhoneNumber(invalidPhoneNumber);
    await rp.fillEmail(rp.fake().email);
    await rp.fillPassword(rp.fake().password);
    await rp.chooseNationality('Polska');
    await rp.checkNewsletterCheckbox();
    await rp.checkPrivacyPolicyCheckbox();
    await rp.checkWizzAccountPolicyCheckbox();
    await rp.clickRegisterButton();
    await rp.verifyVisibleErrors(1, [
      'Wpisz prawidłowy numer telefonu komórkowego.',
    ]);
  });

  test.skip('Testing scenario with incorrect email', async () => {
    const rp = new RegistrationPage(driver);

    await rp.fillName(rp.fake().firstName);
    await rp.fillSurname(rp.fake().secondName);
    await rp.chooseGender('female');
    await rp.fillCountryCode(rp.fake().countryCode);
    await rp.fillPhoneNumber(rp.fake().phoneNumber);
    await rp.fillEmail(invalidEmail);
    await rp.fillPassword(rp.fake().password);
    await rp.chooseNationality('Polska');
    await rp.checkNewsletterCheckbox();
    await rp.checkPrivacyPolicyCheckbox();
    await rp.checkWizzAccountPolicyCheckbox();
    await rp.clickRegisterButton();
    await rp.verifyVisibleErrors(1, ['Nieprawidłowy adres e-mail']);
  });

  test.skip('Testing scenario with incorrect password', async () => {
    const rp = new RegistrationPage(driver);

    await rp.fillName(rp.fake().firstName);
    await rp.fillSurname(rp.fake().secondName);
    await rp.chooseGender('female');
    await rp.fillCountryCode(rp.fake().countryCode);
    await rp.fillPhoneNumber(rp.fake().phoneNumber);
    await rp.fillEmail(rp.fake().email);
    await rp.fillPassword(invalidPassword);
    await rp.chooseNationality('Australia');
    await rp.checkNewsletterCheckbox();
    await rp.checkPrivacyPolicyCheckbox();
    await rp.checkWizzAccountPolicyCheckbox();
    await rp.clickRegisterButton();
    await rp.verifyVisibleErrors(1, ['Wpisz hasło']);
  });

  test.skip('Testing scenario without chosen nationality', async () => {
    const rp = new RegistrationPage(driver);

    await rp.fillName(rp.fake().firstName);
    await rp.fillSurname(rp.fake().secondName);
    await rp.chooseGender('female');
    await rp.fillCountryCode(rp.fake().countryCode);
    await rp.fillPhoneNumber(rp.fake().phoneNumber);
    await rp.fillEmail(rp.fake().email);
    await rp.fillPassword(rp.fake().password);
    await rp.checkNewsletterCheckbox();
    await rp.checkPrivacyPolicyCheckbox();
    await rp.checkWizzAccountPolicyCheckbox();
    await rp.clickRegisterButton();
    await rp.verifyVisibleErrors(1, ['Ten kraj nie istnieje.']);
  });

  test.skip('Testing scenario without checked checkboxes', async () => {
    const rp = new RegistrationPage(driver);

    await rp.fillName(rp.fake().firstName);
    await rp.fillSurname(rp.fake().secondName);
    await rp.chooseGender('female');
    await rp.fillCountryCode(rp.fake().countryCode);
    await rp.fillPhoneNumber(rp.fake().phoneNumber);
    await rp.fillEmail(rp.fake().email);
    await rp.fillPassword(rp.fake().password);
    await rp.chooseNationality('Australia');
    await rp.checkNewsletterCheckbox();
    await rp.clickRegisterButton();
    await rp.verifyVisibleErrors(2, [
      'Aby kontynuować, musisz wyrazić zgodę na politykę prywatności.',
      'You must accept the WIZZ Account Terms and Conditions to continue.',
    ]);
  });

  test.skip('Testing scenario with all incorrect inputs', async () => {
    const rp = new RegistrationPage(driver);

    await rp.fillName(invalidFirstname);
    await rp.fillSurname(invalidSurname);
    await rp.fillPhoneNumber(invalidPhoneNumber);
    await rp.checkNewsletterCheckbox();
    await rp.clickRegisterButton();
    await rp.verifyVisibleErrors(9, [
      'Nieprawidłowy znak',
      'Nieprawidłowy znak',
      'Wybierz',
      'Wpisz prawidłowy numer telefonu komórkowego.',
      'Nieprawidłowy adres e-mail',
      'Wpisz hasło',
      'Ten kraj nie istnieje.',
      'Aby kontynuować, musisz wyrazić zgodę na politykę prywatności.',
      'You must accept the WIZZ Account Terms and Conditions to continue.',
    ]);
  });

  test('Testing successful registration scenario ', async () => {
    const rp = new RegistrationPage(driver);

    await rp.fillName(rp.fake().firstName);
    await rp.fillSurname(rp.fake().secondName);
    await rp.chooseGender('male');
    await rp.fillCountryCode(rp.fake().countryCode);
    await rp.fillPhoneNumber(rp.fake().phoneNumber);
    await rp.fillEmail(rp.fake().email);
    await rp.fillPassword(rp.fake().password);
    await rp.chooseNationality('Australia');
    await rp.checkNewsletterCheckbox();
    await rp.checkPrivacyPolicyCheckbox();
    await rp.checkWizzAccountPolicyCheckbox();
    await rp.clickRegisterButton();
    await rp.verifySuccessfulRegistration();
  });

  afterAll(async () => {
    // await driver.close();
    await driver.quit();
  });
});

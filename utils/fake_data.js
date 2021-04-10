const faker = require('faker/locale/pl');
const { removeDiacritics } = require('./utilities.js');

const fake = () => ({
  firstName: removeDiacritics(faker.name.firstName()),
  secondName: removeDiacritics(faker.name.lastName()),
  gender: faker.name.gender(),
  countryCode: faker.address.country(),
  phoneNumber: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

module.exports = fake;

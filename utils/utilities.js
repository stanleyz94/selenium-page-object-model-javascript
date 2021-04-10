// Removes polish accents/diacritics in a string
const removeDiacritics = (string) => {
  return string
    .replace(/\u0142/g, 'l')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

module.exports = { removeDiacritics };

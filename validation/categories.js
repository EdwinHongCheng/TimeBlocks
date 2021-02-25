const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCatgegoryInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';
  data.color = validText(data.color) ? data.color : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(data.color)) {
    errors.color = 'Color field is required'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
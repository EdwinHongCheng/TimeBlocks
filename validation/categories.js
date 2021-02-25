const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCatgegoryInput(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : '';
  data.color = validText(data.color) ? data.color : '';

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  if (Validator.isEmpty(data.color)) {
    errors.text = 'Color field is required'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
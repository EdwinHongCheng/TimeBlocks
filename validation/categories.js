const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCatgegoryInput(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : '';
  // data.userId = validText(data.userId) ? data.userId : '';

  // if (!Validator.isLength(data.text, { max: 25 })) {
  //   errors.text = 'Category must be less than 25 characters';
  // }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  // if (Validator.isEmpty(data.userId)) {
  //   errors.text = 'User id is required';
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
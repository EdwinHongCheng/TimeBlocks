const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTaskInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : '';
    data.catId = validText(data.catId) ? data.catId : '';

    // if (!Validator.isLength(data.title, { max: 25 })) {
    //     errors.title = 'Titles have a max length of 25 characters;';
    // }

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if (Validator.isEmpty(data.catId)) {
        errors.catId = 'Category id is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';
    data.name = validText(data.name) ? data.name : '';
    data.username = validText(data.username) ? data.username : '';

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Please enter an email';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Please enter a password';
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Please input a name';
    }

    if (Validator.isEmpty(data.username)) {
        errors.username = 'Please input a username';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
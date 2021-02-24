const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateGridInput(data) {
    let errors = {};

    data.taskId = validText(data.taskId) ? data.taskId : '';

    if (Validator.isEmpty(data.hour)) {
        errors.hour = 'Hour field is required';
    }

    if (Validator.isEmpty(data.taskId)) {
        errors.taskId = 'taskId field is required';
    }

    if (!Validator.isInt(data.hour)) {
        errors.hour = "Hour must be an integer";
    } else if (!Validator.isInt(data.hour, {min:01, max: 25 })) {
        errors.hour = "Hour must be between 1 and 24";
    }



    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
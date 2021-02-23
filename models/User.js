const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySchema = require('./Category');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // categories: [CategorySchema]
}, {
    timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);
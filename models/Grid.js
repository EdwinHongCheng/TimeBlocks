const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GridSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    hour: {
        type: Number,
        required: true
    },
    task: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

module.exports = Grid = mongoose.model('Grid', GridSchema);
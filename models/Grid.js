const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GridSchema = new Schema({
    // hours: {
    //     1: null, 2: null, 3: null, 4: null,
    //     5: null, 6: null, 7: null, 8: null,
    //     9: null, 10: null, 11:null, 12: null,
    //     13: null, 14: null, 15: null, 16: null,
    //     17: null, 18: null, 19: null, 20: null,
    //     21: null, 22: null, 23: null, 24: null
    // },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
})

module.exports = Grid = mongoose.model('Grid', GridSchema);
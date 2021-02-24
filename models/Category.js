const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TaskSchema = require('./Task')

// const TaskSchema = new Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   },
// })


const CategorySchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  tasks: [ TaskSchema ]
});


module.exports = Category = mongoose.model('category', CategorySchema);

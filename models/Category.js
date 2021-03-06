const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TaskSchema = require('./Task')

const CategorySchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  color: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  tasks: [ TaskSchema ]
});

module.exports = Category = mongoose.model('category', CategorySchema);
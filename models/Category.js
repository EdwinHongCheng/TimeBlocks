const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TaskSchema = require('./Task')

const CategorySchema = new Schema({
  // user: { 
  //   type: Schema.Types.ObjectId,
  //   ref: 'users'
  // },
  text: {
    type: String,
    required: true
  },
  // date: {
  //   type: Date,
  //   default: Date.now
  // },
  tasks: [TaskSchema]
});

// module.exports = Category = mongoose.model('category', CategorySchema);
module.exports = CategorySchema;
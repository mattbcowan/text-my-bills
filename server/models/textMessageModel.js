const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var textSchema = new Schema({
  name: String,
  message: String
  // phoneNumber: String,
  // created_at: Date,
  // updated_at: Date
})

const Text = mongoose.model('Text', textSchema);

module.exports = Text;

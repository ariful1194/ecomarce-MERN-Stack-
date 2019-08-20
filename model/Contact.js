const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create user model

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Contact = mongoose.model("contacts", ContactSchema);

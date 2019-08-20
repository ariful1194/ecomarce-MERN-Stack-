const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create user model

const AdminSchema = new Schema({
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
  admintype: {
    type: String,
    default: 1
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Admin = mongoose.model("admins", AdminSchema);

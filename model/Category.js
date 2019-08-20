const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Category model

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  }
});
module.exports = Category = mongoose.model("categories", CategorySchema);

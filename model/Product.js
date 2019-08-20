const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Product model

const ProductSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: "categories"
  },
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  prize: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
module.exports = Product = mongoose.model("products", ProductSchema);

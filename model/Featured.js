const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Carosul model

const FeaturedSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "products"
  }
});
module.exports = Feature = mongoose.model("featured", FeaturedSchema);

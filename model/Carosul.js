const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Carosul model

const CarosulSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "products"
  }
});
module.exports = Carosul = mongoose.model("carosuls", CarosulSchema);

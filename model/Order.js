const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Product model

const OrderSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  payment: {
    type: String,
    required: true
  },
  order_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Number,
    default: 0
  },
  desc: {
    type: String
  },
  last4digit: {
    type: String
  },
  products: [
    {
      cartId: {
        type: String,
        require: true
      },
      productId: {
        type: Schema.Types.ObjectId,
        ref: "products"
      },
      productQuantity: {
        type: Number,
        require: true
      },
      productName: {
        type: String,
        require: true
      },
      productPrize: {
        type: Number,
        require: true
      }
    }
  ],
  total: {
    type: Number,
    required: true
  }
});
module.exports = Order = mongoose.model("orders", OrderSchema);

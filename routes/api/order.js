const express = require("express");
const router = express.Router();
var telerivet = require("telerivet");
//Model
const Order = require("../../model/Order");

//Validation
//const validateCategoryInput = require("../../validation/category");

router.get("/test", (req, res) => {
  res.json({
    msg: "Order test"
  });
});

router.get("/neworder", (req, res) => {
  Order.find({ status: 0 })
    .then(orders => {
      if (!orders) {
        return res.status(400).json({ msg: "Not found" });
      }
      res.status(200).json(orders);
    })
    .catch();
});
router.get("/confirmorder", (req, res) => {
  Order.find({ status: 1 })
    .then(orders => {
      if (!orders) {
        return res.status(400).json({ msg: "Not found" });
      }
      res.status(200).json(orders);
    })
    .catch();
});
router.get("/totalorder", (req, res) => {
  Order.find()
    .then(orders => {
      if (!orders) {
        return res.status(400).json({ msg: "Not found" });
      }
      res.status(200).json(orders);
    })
    .catch();
});
router.put("/confirmorderbyid", (req, res) => {
  var tr = new telerivet.API("y09m9_0wYWYNsi3FKt5YmLGGJX9AYSQEh2p5");
  var project = tr.initProjectById("PJe23c161fd243303a");

  id = req.body.id;
  Order.findById(id)
    .then(order => {
      project.sendMessage(
        {
          to_number: order.mobile,
          content:
            "Your Order has Confirmed Successfully!\
            Thanks\
            \
            Plastic Bazaar\
            "
        },
        function(err, message) {
          if (err) throw err;
          console.log(message);
        }
      );
    })
    .catch();

  Order.findByIdAndUpdate(id, { $set: { status: 1 } }, { new: true })
    .then(orders => {
      if (!orders) {
        return res.status(400).json({ msg: "Not found" });
      }
      res.status(200).json(orders);
    })
    .catch();
});

//@route Post api/orders
//@desc  Create Order
//@access public

router.post("/", (req, res) => {
  const {
    firstName,
    lastName,
    email,
    mobile,
    address,
    desc,
    products,
    last4digit,
    payment
  } = req.body;

  let total =
    products.reduce(
      (acc, item) => (acc += item.productQuantity * item.productPrize),
      0
    ) + 150;

  newOrder = new Order({
    firstName,
    lastName,
    email,
    mobile,
    address,
    desc,
    payment,
    products,
    last4digit,
    total
  });
  console.log(newOrder);

  newOrder
    .save()
    .then(order => {
      if (!order) {
        return res.status(400).json({ msg: "can't order successfully" });
      }
      return res.status(200).json(order);
    })
    .catch();
});

module.exports = router;

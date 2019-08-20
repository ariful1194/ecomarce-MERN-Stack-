const express = require("express");
const router = express.Router();

// Load Carosul MOdel
const Carosul = require("../../model/Carosul");

//@route Post api/carosul/add
//@desc  Add product to Carosul
//@access private

router.post("/add", (req, res) => {
  const newCarosul = new Carosul({
    product: req.body.product
  });

  newCarosul
    .save()
    .then(carosul => {
      if (!carosul) {
        return res.status(400).json({ product: "Not Successfull" });
      }
      return res.status(200).json(carosul);
    })
    .catch();
});

//@route Post api/carosul/add
//@desc  Add product to Carosul
//@access private

router.get("/", (req, res) => {
  Carosul.find()
    .populate("product")
    .then(carosuls => {
      if (!carosuls) {
        return res.status(400).json({ product: "No product" });
      }
      return res.status(200).json(carosuls);
    })
    .catch();
});

module.exports = router;

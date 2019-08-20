const express = require("express");
const router = express.Router();

// Load Featured MOdel
const Featured = require("../../model/Featured");

//@route Post api/carosul/add
//@desc  Add product to Carosul
//@access private

router.post("/add", (req, res) => {
  const newFeatured = new Featured({
    product: req.body.product
  });

  newFeatured
    .save()
    .then(feature => {
      if (!feature) {
        return res.status(400).json({ product: "Not Successfull" });
      }
      return res.status(200).json(feature);
    })
    .catch();
});

//@route Post api/carosul/add
//@desc  Add product to Carosul
//@access private

router.get("/", (req, res) => {
  Featured.find()
    .populate("product")
    .then(feature => {
      if (!feature) {
        return res.status(400).json({ product: "Not Successfull" });
      }
      return res.status(200).json(feature);
    })
    .catch();
});

module.exports = router;

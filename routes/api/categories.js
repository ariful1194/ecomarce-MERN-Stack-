const express = require("express");
const router = express.Router();

//Model
const Category = require("../../model/Category");

//Validation
const validateCategoryInput = require("../../validation/category");

router.get("/test", (req, res) => {
  res.json({
    msg: "category test"
  });
});

//@route Post api/categories
//@desc  Create Category
//@access private
router.post("/", (req, res) => {
  const { errors, isValid } = validateCategoryInput(req.body);

  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // after validation Pass

  const newCategory = new Category({
    name: req.body.name
  });

  newCategory
    .save()
    .then(category => {
      if (category) {
        res.status(200).json(category);
      }
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

//@route Post api/categories
//@desc  Get all Category
//@access private
router.get("/", (req, res) => {
  Category.find()
    .populate("products", "name")
    .then(category => {
      if (category) {
        res.status(200).json(category);
      }
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});
//@route DELETE api/category/:id
//@desc  Delete A Category
//@access private

router.delete("/:id", (req, res) => {
  Category.findByIdAndRemove(req.params.id)
    .then(category => {
      if (!category) {
        return res.status(400).json({ msg: "No Category Found" });
      }
      // const path = `../../client/src/image/${product.image}`;
      // fs.unlink(path, function(err) {
      //   if (err) throw err;
      //   // if no error, file has been deleted successfully
      //   console.log("File deleted!");
      // });
      return res.status(200).json(category);
    })
    .catch();
});
module.exports = router;

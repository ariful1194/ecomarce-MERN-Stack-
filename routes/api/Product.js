const express = require("express");
const router = express.Router();
const uuidv4 = require("uuid/v4");
const fs = require("fs");

// // Multer
const multer = require("multer");
const upload = require("../../multer/Multer");

//Model
const Product = require("../../model/Product");
const Category = require("../../model/Category");
//validation
const validateProductInput = require("../../validation/product");
router.get("/test", (req, res) => {
  res.json({
    msg: "Product test"
  });
});

//@route Post api/products
//@desc  Create product
//@access private
router.post("/", (req, res) => {
  upload(req, res, function(err) {
    const { category, name, prize, desc } = req.body;
    const { errors, isValid } = validateProductInput({
      category,
      name,
      prize,
      desc
    });
    //check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    // Save Product

    Category.findOne({ _id: req.body.category })
      .then(category => {
        if (!category) {
          errors.category = "No Category Found!";
          return res.status(400).json(errors);
        } else {
          if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            console.log("multer err");
            //console.log(err.message);
            errors.image = err.message;
            return res.status(400).json(errors);
          } else if (err) {
            // An unknown error occurred when uploading.Like filterImage
            //console.log(err.msg);
            errors.image = err.msg;
            return res.status(400).json(errors);
          } else {
            // Everything went fine.
            //console.log(req.file.filename);

            if (!req.file) {
              errors.image = "Select An Image";
              return res.status(400).json(errors);
            }
            // console.log(req.file);
            newProduct = new Product({
              category: req.body.category,
              name: req.body.name,
              code: uuidv4(),
              prize: req.body.prize,
              desc: req.body.desc,
              image: req.file.filename
            });
            // console.log(newProduct);
            newProduct
              .save()
              .then(product => {
                res.status(200).json(product);
              })
              .catch(err => console.log(err));
          }

          // Everything went fine.
        }
      })
      .catch(err => {
        console.log(err);
      });
  });
});

//@route Get api/products
//@desc  Get All the Products
//@access public

router.get("/", (req, res) => {
  Product.find()
    .populate("category", ["_id", "name"])
    .then(products => {
      if (!products) {
        return res.status(400).json({ msg: "No Product Found" });
      }
      return res.status(200).json(products);
    })
    .catch();
});

//@route Get api/products
//@desc  Get All the Products
//@access public

router.get("/category/:id", (req, res) => {
  Product.find({ category: req.params.id })
    .populate("category", ["_id", "name"])
    .then(products => {
      if (!products) {
        return res.status(400).json({ msg: "No Product Found" });
      }
      return res.status(200).json(products);
    })
    .catch();
});

//@route Get api/products/show/:id
//@desc  Get A Products
//@access public

router.get("/show/:id", (req, res) => {
  Product.findById(req.params.id)
    .populate("category", ["_id", "name"])
    .then(product => {
      if (!product) {
        return res.status(400).json({ msg: "No Product Found" });
      }
      return res.status(200).json(product);
    })
    .catch();
});

//@route DELETE api/products//:id
//@desc  Delete A Products
//@access private

router.delete("/:id", (req, res) => {
  Product.findByIdAndRemove(req.params.id)
    .then(product => {
      if (!product) {
        return res.status(400).json({ msg: "No Product Found" });
      }
      // const path = `../../client/src/image/${product.image}`;
      // fs.unlink(path, function(err) {
      //   if (err) throw err;
      //   // if no error, file has been deleted successfully
      //   console.log("File deleted!");
      // });
      return res.status(200).json(product);
    })
    .catch();
});

module.exports = router;

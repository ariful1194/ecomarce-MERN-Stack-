const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const passport = require("passport");

//Load Input Validation
// const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// bring User MOdel here
const Admin = require("../../model/Admin");

router.get("/test", (req, res) => {
  res.json({
    msg: "Amin test"
  });
});

//@route  Post api/users/register
//@desc   Register A User
//@access PUblic
router.post("/adminregister", (req, res) => {
  //   const { errors, isValid } = validateRegisterInput(req.body);
  //   //check validation
  //   if (!isValid) {
  //     return res.status(400).json(errors);
  //   }

  Admin.findOne({ email: req.body.email })
    .then(admin => {
      if (admin) {
        errors.email = "Email Already Exist!";
        return res.status(400).json(errors);
      } else {
        newAdmin = new Admin({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newAdmin.password, salt, (err, hash) => {
            if (err) throw err;
            newAdmin.password = hash;

            newAdmin
              .save()
              .then(user => {
                res.json(user);
              })
              .catch(err => console.log(err));
          });
        });
      }
    })
    .catch();
});

//@route  Post api/users/login
//@desc   User Login // create jwt
//@access PUblic\
router.post("/adminlogin", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //find the user by email
  Admin.findOne({ email })
    .then(user => {
      if (!user) {
        errors.email = "User Not Found!";
        return res.status(404).json(errors);
      }

      //check passpord
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // user matched
          const payload = { id: user.id, name: user.name }; // create jwt payload
          //sign token

          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 5555 },
            (err, token) => {
              res.json({ success: true, token: "Bearer " + token });
            }
          );
        } else {
          errors.password = "Password Incorrect!";
          return res.status(400).json(errors);
        }
      });
    })
    .then();
});

// @route  GET api/users/current
// @desc   Return Current User
// @access Private\
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;

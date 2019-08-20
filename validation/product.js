const validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.category = !isEmpty(data.category) ? data.category : "";
  data.name = !isEmpty(data.name) ? data.name : "";

  //data.code = !isEmpty(data.code) ? data.code : "";
  // data.image = !isEmpty(data.image) ? data.image : "";
  data.prize = !isEmpty(data.prize) ? data.prize : "";
  data.desc = !isEmpty(data.desc) ? data.desc : "";

  if (validator.isEmpty(data.category)) {
    errors.category = "Category field is Required!";
  }

  if (!validator.isLength(data.name, { min: 2, max: 40 })) {
    errors.name = "Name Must be between 2 to 30 characters";
  }
  if (validator.isEmpty(data.name)) {
    errors.name = "Name field is Required!";
  }
  //   if (!validator.isEmail(data.email)) {
  //     errors.email = "Invalid Email!";
  //   }
  // if (validator.isEmpty(data.code)) {
  //   errors.code = "Product Code field is Required!";
  // }
  // if (validator.isEmpty(data.image)) {
  //   errors.image = "Profile Image Required!";
  // }

  if (validator.isEmpty(data.prize)) {
    errors.prize = "Prize field is Required!";
  }

  if (validator.isEmpty(data.desc)) {
    errors.desc = "Description field is Required!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

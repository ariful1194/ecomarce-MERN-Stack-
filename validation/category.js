const validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateCategoryInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";

  if (!validator.isLength(data.name, { min: 2, max: 40 })) {
    errors.name = "Text Must be Between 10 to 300 characters!";
  }
  if (validator.isEmpty(data.name)) {
    errors.name = "Name field is Required!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

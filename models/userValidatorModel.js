const joi = require("@hapi/joi");

const signupUserValidation = (data) => {
  let signupSchema = joi.object({
    name: joi.string().required().max(25).min(3).token().lowercase().trim(),
    user_name: joi
      .string()
      .lowercase()
      .token()
      .required()
      .min(4)
      .max(30)
      .trim(),
    email: joi.string().lowercase().email().required().trim(),
    password: joi.string().required(),
    profile: joi.string().trim(),
  });
  return signupSchema.validate(data);
};

const loginValidaton = (data) => {
  let LoginSchema = joi.object({
    email: joi.string().lowercase().trim().email().required(),
    password: joi.string().required(),
  });
  return LoginSchema.validate(data);
};

module.exports = {
  signupUserValidation,
  loginValidaton,
};

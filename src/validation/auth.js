import Joi from "joi";

const validateUserSignup = (user) => {
  const JoiSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
      "any.required": "name is required.",
    }),
    email: Joi.string().email().min(5).max(50).required().messages({
      "any.required": "email is required.",
    }),
    nydp_code: Joi.string().min(5).max(30).required().messages({
      "any.required": "nydp_code is required.",
    }),
    role: Joi.valid("user", "admin").required().messages({
      "any.required": "role is required.",
    }),
    password: Joi.string().min(5).max(30).required().messages({
      "any.required": "password is required.",
    }),
  }).options({
    abortEarly: false,
  });

  return JoiSchema.validate(user);
};

const validateLogin = (user) => {
  const JoiSchema = Joi.object({
    email: Joi.string().email().min(5).max(50).required().messages({
      "any.required": "email is required.",
    }),
    password: Joi.string().min(5).max(30).required().messages({
      "any.required": "password is required.",
    }),
    nydp_code: Joi.string().min(5).max(30).required().messages({
      "any.required": "nydp_code is required.",
    }),
  }).options({
    abortEarly: false,
  });

  return JoiSchema.validate(user);
};
export { validateUserSignup, validateLogin };

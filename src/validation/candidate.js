import Joi from "joi";

const validation = state => {
  const schema = Joi.object({
    name: Joi.string().required()
      .messages({
        "any.required": "Sorry, name is required.",
        "string.empty": "Name cannot be an empty field.",
        "string.base": "Name must contain only alphabetical characters."
      }),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "uk", "co"] } }).min(5)
      .max(100)
      .empty()
      .messages({
        "any.required": "Sorry, email is required",
        "string.empty": "Sorry, Email cannot be an empty field",
        "string.email": "Please enter a valid email",
      }),
    state_id: Joi.string().required()
      .empty().guid({ version: "uuidv4" })
      .messages({
        "any.required": "state_id is required.",
        "string.empty": "state_id cannot be an empty field.",
        "string.base": "state_id must be a string.",
        "string.guid": "state_id must be a UUID"
      }),
  }).messages({
    "object.unknown": "You have used an invalid key."
  }).options({ abortEarly: false });
  return schema.validate(state);
};

const validateId = ids => {
  const schema = Joi.object({
    id: Joi.string().required()
      .empty().guid({ version: "uuidv4" })
      .messages({
        "any.required": "ID not provided. Please provide an ID.",
        "string.empty": "ID cannot be an empty field.",
        "string.base": "ID must be a string.",
        "string.guid": "ID must be a UUID"
      }),
  }).messages({
    "object.unknown": "You have used an invalid key."
  }).options({ abortEarly: false });
  return schema.validate(ids);
};

export { validation, validateId };

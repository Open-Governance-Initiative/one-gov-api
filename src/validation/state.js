import Joi from "joi";

const validation = state => {
  const schema = Joi.object({
    name: Joi.string().required()
      .messages({
        "any.required": "Sorry, state name is required.",
        "any.only": "State must be an African state.",
        "string.empty": "State cannot be an empty field.",
        "string.base": "State name must contain only alphabetical characters."
      }),
    election_id: Joi.string().required()
      .empty().guid({ version: "uuidv4" })
      .messages({
        "any.required": "election_id is required.",
        "string.empty": "election_id cannot be an empty field.",
        "string.base": "election_id must be a string.",
        "string.guid": "election_id must be a UUID"
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
    election_id: Joi.string().guid({ version: "uuidv4" })
      .messages({
        "string.guid": "election_id must be a UUID"
      })
  }).messages({
    "object.unknown": "You have used an invalid key."
  }).options({ abortEarly: false });
  return schema.validate(ids);
};

export { validation, validateId };

import Joi from "joi";

const validation = election => {
  const schema = Joi.object({
    title: Joi.string().empty().required()
      .messages({
        "any.required": "Sorry, Election name is required.",
        "string.empty": "Election name cannot be an empty field.",
      }),
    status: Joi.string().empty().required()
      .messages({
        "any.required": "status is required.",
        "string.empty": "Sorry, status cannot be an empty field"
      }),
    election_date: Joi.date().required().empty()
      .messages({
        "any.required": "Date is required.",
        "date.empty": "date field cannot be an empty field.",
        "date.base": "Please provide a valid date."

      }),
  }).messages({
    "object.unknown": "You have used an invalid key."
  }).options({ abortEarly: false });
  return schema.validate(election);
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

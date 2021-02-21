import Joi from "joi";

const voteValidation = (state) => {
  const schema = Joi.object({
    candidate_id: Joi.string()
      .required()
      .empty()
      .guid({ version: "uuidv4" })
      .messages({
        "any.required": "candidate_id is required.",
        "string.empty": "candidate_id cannot be an empty field.",
        "string.base": "candidate_id must be a string.",
        "string.guid": "candidate_id must be a UUID",
      }),
    election_id: Joi.string()
      .required()
      .empty()
      .guid({ version: "uuidv4" })
      .messages({
        "any.required": "election_id is required.",
        "string.empty": "election_id cannot be an empty field.",
        "string.base": "election_id must be a string.",
        "string.guid": "election_id must be a UUID",
      }),
  })
    .messages({
      "object.unknown": "You have used an invalid key.",
    })
    .options({ abortEarly: false });
  return schema.validate(state);
};

const validateId = id => {
    const schema = Joi.object({
      election_id: Joi.string().guid({ version: "uuidv4" })
        .messages({
          "string.guid": "election_id must be a UUID"
        })
    }).messages({
      "object.unknown": "You have used an invalid key."
    }).options({ abortEarly: false });
    return schema.validate(id);
}

export { voteValidation, validateId };

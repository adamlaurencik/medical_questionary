const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().max(1024).required(),
  });
  return schema.validate(data);
};

const questionaryEntryValidation = (data) => {
  const schema = Joi.object({
    patientName: Joi.string().min(1).required(),
    type: Joi.string().valid("IN", "OUT"),
    answers: Joi.array().items(
      Joi.object({
        questionId: Joi.string().required(),
        answer: Joi.number().required().min(0).max(5),
      })
    ),
  });
  return schema.validate(data);
};

module.exports = {
  registerValidation,
  loginValidation,
  questionaryEntryValidation,
};

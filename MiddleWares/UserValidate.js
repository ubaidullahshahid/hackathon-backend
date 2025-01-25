const Joi = require("joi");

const userRegisterValidate = (req, res) => {
  console.log(req.body);
  const { email, userName, password } = req.body;

  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .min(6)
      .required()
      .regex(/^[\w!@#$%^&*()_+=[\]{};':"\\|,.<>/?-]+$/)
      .messages({
        "string.pattern.base":
          "Password must not contain spaces and should include special characters if needed",
        "string.min": "Password must be at least 6 characters long",
      }),
  });

  const { error } = schema.validate(
    { email, userName, password },
    { abortEarly: false }
  );

  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).json({
      message: errorMessages.join(","),
    });
  }

  return null;
};

module.exports = userRegisterValidate;

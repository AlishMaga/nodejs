const Joi = require("joi");

//validation using Joi
const validateRegisterData = async (req, res, next) => {
  try {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().required(), 
        password: Joi.string()
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/) // Fixed regex
            .required()
            .messages({
                "string.pattern.base": "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number."
            }),
        confirmPassword: Joi.ref("password")
    }).with("password", "confirmPassword"); // Ensures both password & confirmPassword exist
    

    await schema.validateAsync(req.body, { abortEarly: false });

    next();
  } catch (error) {
    // Ensure error.details exists before calling map
    if (error.details) {
        return res.status(400).json({
            message: "Validation failed",
            errors: error.details.map(err => err.message)
        });
    }

    // Handle unexpected Joi errors
    return res.status(500).json({
        message: "Internal Server Error",
        error: error.message
    });
  }
};

module.exports = {validateRegisterData};
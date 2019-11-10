const { dbService } = _services;
const bcrypt = require("bcryptjs");
const { check, sanitize } = require("express-validator");
const { respondIfValidationFailed } = _utils;

const Signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const backofficeAgent = await dbService.backofficeAgent.findByEmail(email);
        if (backofficeAgent) return res.status(400).send({ error: "Email already exists" });

        const newBackofficeAgent = await dbService.backofficeAgent.create({
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        });

        req.session.backofficeAgentId = newBackofficeAgent.id;
        req.backofficeAgent = newBackofficeAgent;
        req.session.save();

        return res.send({ message: "signup successful" });
    } catch (err) {
        _logger.error(__filename, err);
        return res.status(500).send({ error: "An error occurred" });
    }
};

module.exports = [
    sanitize("email").normalizeEmail({ gmail_remove_dots: false }),
    check("firstName", "Field firstName is required").exists(),
    check("firstName", "Field firstName must be a string").isString(),
    check("lastName", "Field lastName is required").exists(),
    check("lastName", "Field lastName must be a string").isString(),
    check("email", "Field email is required").exists(),
    check("email", "Field email must be a string").isString(),
    check("password", "Field password is required").exists(),
    check("password", "Field password must be a string").isString(),
    respondIfValidationFailed,
    Signup
];

const { dbService } = _services;
const { check } = require("express-validator");
const { sanitize } = require("express-validator");
const { respondIfValidationFailed } = _utils;
const bcrypt = require("bcryptjs");

const createRootAgent = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        await dbService.backofficeAgent.create({
            first_name: firstName,
            last_name: lastName,
            email,
            access_level: 0,
            password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        });

        return res.send({ message: "Root agent created!" });
    } catch (err) {
        _logger.error(`${__filename} ` + err);
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
    check("email", "Field email must be a valid email format").isEmail(),
    check("password", "Field password is required").exists(),
    respondIfValidationFailed,
    createRootAgent
];

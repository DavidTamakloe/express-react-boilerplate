const { dbService } = _services;
const { sanitize } = require("express-validator");
const { check } = require("express-validator");
const { respondIfValidationFailed } = _utils;
const bcrypt = require("bcryptjs");

const routeHandler = async (req, res) => {
    try {
        const { firstName, lastName, email, password, accessLevel } = req.body;
        await dbService.backofficeAgent.create({
            first_name: firstName,
            last_name: lastName,
            email,
            access_level: accessLevel,
            password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        });
        return res.json({ message: "success" });
    } catch (err) {
        _logger.error(`__filename ` + err);
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
    check("accessLevel", "Field accessLevel is required").exists(),
    check("password", "Field password is required").exists(),
    respondIfValidationFailed,
    routeHandler
];

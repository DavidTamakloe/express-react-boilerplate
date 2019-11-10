const { dbService } = _services;
const bcrypt = require("bcryptjs");
const { check, sanitize } = require("express-validator");
const { respondIfValidationFailed } = _utils;

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const backofficeAgent = await dbService.backofficeAgent.findByEmail(email);
        if (!backofficeAgent) return res.status(401).send({ error: "No agent found" });
        if (!bcrypt.compareSync(password, backofficeAgent.password))
            return res.status(401).send({ error: "Invalid password" });

        req.session.backofficeAgentId = backofficeAgent.id;
        req.backofficeAgent = backofficeAgent;
        req.session.save();

        return res.send({ message: "login successful" });
    } catch (err) {
        _logger.error(__filename, err);
        return res.status(500).send({ error: "An error occurred" });
    }
};

module.exports = [
    sanitize("email").normalizeEmail({ gmail_remove_dots: false }),
    check("email", "Field email is required").exists(),
    check("email", "Field email must be a string").isString(),
    check("password", "Field password is required").exists(),
    check("password", "Field password must be a string").isString(),
    respondIfValidationFailed,
    login
];

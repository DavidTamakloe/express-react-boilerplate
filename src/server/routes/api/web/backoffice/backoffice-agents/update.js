const { dbService } = _services;
const { check } = require("express-validator");
const { respondIfValidationFailed } = _utils;

const routeHandler = async (req, res) => {
    try {
        const { agentId, firstName, lastName, accessLevel } = req.body;
        await dbService.backofficeAgent.edit(agentId, {
            first_name: firstName,
            last_name: lastName,
            access_level: accessLevel
        });
        return res.json({ message: "success" });
    } catch (err) {
        _logger.error(`__filename ` + err);
        return res.status(500).send({ error: "An error occurred" });
    }
};

module.exports = [
    check("firstName", "Field firstName is required").exists(),
    check("firstName", "Field firstName must be a string").isString(),
    check("lastName", "Field lastName is required").exists(),
    check("lastName", "Field lastName must be a string").isString(),
    check("accessLevel", "Field accessLevel is required").exists(),
    respondIfValidationFailed,
    routeHandler
];

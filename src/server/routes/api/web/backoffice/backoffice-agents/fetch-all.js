const { dbService } = _services;
// const { check } = require("express-validator");
// const { respondIfValidationFailed } = _utils;

const routeHandler = async (req, res) => {
    try {
        const backofficeAgents = await dbService.backofficeAgent.findAll();
        return res.json({ message: "success", backofficeAgents });
    } catch (err) {
        _logger.error(`__filename ` + err);
        return res.status(500).send({ error: "An error occurred" });
    }
};

module.exports = [
    // respondIfValidationFailed
    routeHandler
];

const { dbService } = _services;
const { check } = require("express-validator");
const { respondIfValidationFailed } = _utils;

const routeHandler = async (req, res) => {
    try {
        const { agentId } = req.body;
        await dbService.backofficeAgent.destroy(agentId);
        return res.json({ message: "success" });
    } catch (err) {
        _logger.error(`__filename ` + err);
        return res.status(500).send({ error: "An error occurred" });
    }
};

module.exports = [check("agentId", "Field agentId is required").exists(), respondIfValidationFailed, routeHandler];

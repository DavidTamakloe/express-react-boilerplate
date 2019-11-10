const dbService = _services.dbService;

module.exports = async function isLoggedIn(req, res, next) {
    try {
        const backofficeAgentId = req.session.backofficeAgentId;

        if (!backofficeAgentId) return res.status(401).send({ error: "You must be logged in" });

        const backofficeAgent = await dbService.backofficeAgent.findById(backofficeAgentId);

        if (!backofficeAgent) return res.status(401).send({ error: "You must be logged in" });

        req.backofficeAgent = backofficeAgent;
        return next();
    } catch (err) {
        _logger.error(`${__filename} `, err);
        return res.status(500).send({ error: "Unable to authenticate agent" });
    }
};

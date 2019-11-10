module.exports = (req, res) => {
    try {
        delete req.session.backofficeAgentId;
        if (req.session.backofficeAgentId) {
            req.session.backofficeAgentId = undefined;
            req.session.save();
        }
        res.send({ message: "Logged out" });
    } catch (err) {
        _logger.error(`${__filename} `, err);
        return res.status(500).send({ error: "An error occurred" });
    }
};

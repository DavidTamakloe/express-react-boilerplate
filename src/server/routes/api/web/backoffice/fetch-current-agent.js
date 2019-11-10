module.exports = async (req, res) => {
    try {
        res.json({
            name: req.backofficeAgent.name,
            accessLevel: req.backofficeAgent.access_level
        });
    } catch (err) {
        _logger.error(`${__filename} `, err);
        return res.status(500).send({ error: "An error occurred" });
    }
};

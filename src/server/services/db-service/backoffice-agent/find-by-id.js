const backofficeAgent = require("../../../models/backoffice-agent");

module.exports = function(id, relationString = "") {
    return backofficeAgent
        .query()
        .where({ id })
        .eager(relationString)
        .returning("*")
        .first();
};

const backofficeAgent = require("../../../models/backoffice-agent");

module.exports = function(email, relationString = "") {
    return backofficeAgent
        .query()
        .where({ email })
        .eager(relationString)
        .returning("*")
        .first();
};
